var express = require('express');
var GitHubApi = require('github');
var app = express();

let github = new GitHubApi({
    debug: true,
});

github.authenticate({
  type: "token",
  token: process.env.GITHUB_TOKEN,
});


app.get('/api/contributions', async (req, res) => {
  let resp = await github.search.issues({
    q: 'commenter:app/welcome is:pr is:merged',
    incomplete_results: true,
    per_page: 100,
  });
  res.header('Access-Control-Allow-Origin', '*');
  res.json(resp.data.items);
});

app.listen(process.env.PORT || 3000);
console.log(`Listening on http://127.0.0.1:${process.env.PORT || 3000}`);
