# openai-mcp-client

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

Or you can integrate it with OpenAI and it allows you to interact with your GitHub profile through AI-powered queries. Examples below:

Example 1:
```
node client-with-openai.js "How many commits does my openai-mcp-client repo have that is under my username leartbeqiraj1?"
```

Example 2:
```
node client-with-openai.js "Please do the following: * make a simple html page. * create a repository called 'openai-created-this-repo'. * Push the html page to the 'openai-created-this-repo' repository. * Add a little css to the html page and then push it up. * Make an issue suggesting we add some more content on the html page. *  Now make a branch called feature and make that fix and push the change. *  Make a pull request against main with these changes."
```

