import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import dotenv from 'dotenv';

dotenv.config();

async function createBranch() {
  try {
    const transport = new StdioClientTransport({
      command: process.env.MCP_SERVER_PATH,
      env: {
        GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
      }
    });

    const client = new Client({
      name: "github-branch-creator",
      version: "1.0.0",
    }, {
      capabilities: {}
    });

    await client.connect(transport);

    const createdBranch = await client.callTool({
      name: "create_branch",
      arguments: {
        owner: "client1-rekog", // user or organization
        repo: "demo" ,
        branch: "branch_name1",
        from_branch: "main"
      }
    })

    console.log('createdBranch: ')
    console.log(createdBranch)

    // List all other supported tools, such as create repository, create pull request etc. Listed here: https://github.com/modelcontextprotocol/servers/tree/main/src/github
    // await allTools = client.listTools()

    await client.close()

  } catch (error) {
    console.error("Error:", error);
  }
}

createBranch();
