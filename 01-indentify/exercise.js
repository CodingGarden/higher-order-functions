const fetch = require('node-fetch');

const url = 'https://www.reddit.com/r/birdswitharms.json';

function responseJSON(response) {
  const promise = response.json();
  return promise;
}

function logResult(result) {
  console.log(result);
}

fetch(url).then(responseJSON).then(logResult);