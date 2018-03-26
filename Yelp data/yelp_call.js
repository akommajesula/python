const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'dS5YhZ5Q20OuyA9HW6bqjLyAukNaf3_JvXVKJX73uCB0JYI9oRPg6wvdHdPEjGijpbO1CE5_3_yYI--YAWQn31BD1dAhHiAIlC3T2-oLr2IDVv_GEr_kaocsQDWsWnYx';

const searchRequest = {
  term:'american',
  location: 'new york, ny'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses;
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});