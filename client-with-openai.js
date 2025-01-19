import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { OpenAI } from "openai"
import { OpenAIChatAdapter } from "./adapter.js";
import dotenv from 'dotenv';

dotenv.config();

async function askOpenAI() {
  try {
    const userQuestion = getUserQuestion();

    const transport = new StdioClientTransport({
      command: process.env.MCP_SERVER_PATH,
      env: {
        GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
      }
    });

    const client = new Client({
      name: "github-with-openai",
      version: "1.0.0",
    }, {
      capabilities: {}
    });

    await client.connect(transport);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
    const openaiAdapter = new OpenAIChatAdapter(client)
    const tools = await openaiAdapter.listTools()

    let messages = [
      {
        role: "user",
        content: userQuestion
      },
    ]
    const adapter = new OpenAIChatAdapter(client)
    let isDone = false

    while (!isDone) {
      debugger;
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages,
        tools: tools,
      })

      const toolMessages = await adapter.callTool(response)

      messages.push(response.choices[0].message)
      messages.push(...toolMessages)
      isDone = toolMessages.length === 0
    }

    console.log(messages[messages.length-1].content)

    await client.close()

  } catch (error) {
    console.error("Error:", error);
  }
}

const getUserQuestion = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Please provide a question as a command line argument");
    console.error("Usage: node client-with-openai.js \"Your question here\"");
    process.exit(1);
  }
  return args.join(" ");
};

askOpenAI();

