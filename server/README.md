Server
===

This express app powers iamopensource.github.io. Right now the server simply proxies the GitHub API so we're not exposing the PAT that authenticates against the API. In the future we want to add some "liking" functionality that will be handled by this server.

### Running Locally

To run the server locally, you'll need to [get a GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) with the `public repos` permissions. Replace `XXXXX` with your personal access token.

```bash
npm install
GITHUB_TOKEN=XXXXX npm start
```

### Deployment

This project is currently hosted with [`now.sh`](https://zeit.co/now). The `deploy.sh` script will ask you if you want to want to deploy the front end. If you choose yes, the script will update the endpoint in the jekyll site, commit the change and push the change to GitHub, which kicks off the [GitHub Pages build](https://pages.github.com/).

```bash
npm install -g now
GITHUB_TOKEN=XXXXX  ./deploy.sh
```

### Contributing

This code will probably not change that much so please [open an issue](https://github.com/iamopensource/iamopensource.github.io/issues) before spending time implementing a new features. :D
