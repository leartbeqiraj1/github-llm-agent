# mcp-client-github

Install mcp server for GitHub:
```
npm install -g @modelcontextprotocol/server-github
```

Get path to the executable and replace it in the StdioClientTransport command:
```
which mcp-server-github
```

Generate a GitHub PAT token and use it in the StdioClientTransport env