# mcp-client-github

* Install mcp server for GitHub:
```
npm install -g @modelcontextprotocol/server-github
```
You need to configure two variables:
1. Generate a GitHub Personal Access Token
2. Get path to the MCP server executable (used for StdioClientTransport command):
```
which mcp-server-github
```

You can run the app on simple mode, which will call a single tool from GitHub MCP Server:
```
node client.js
```

Or you can integrate it with OpenAI and it allows you to analyze your GitHub profile through AI-powered queries. 

Usage:
```
node client-with-openai.js "How many commits does my mcp-client-github repo have that is under my username leartbeqiraj1?"
```