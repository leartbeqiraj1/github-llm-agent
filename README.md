# mcp-client-github

1. Install mcp server for GitHub:
```
npm install -g @modelcontextprotocol/server-github
```
2. Generate a GitHub PAT token and use it in the StdioClientTransport env
3. Get path to the executable and replace it in the StdioClientTransport command:
```
which mcp-server-github
```
4. Run app:
```
node client.js
```