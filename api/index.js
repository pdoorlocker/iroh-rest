// api/index.js
const quotes = require('../quotes.json');

module.exports = (req, res) => {
  // 1. Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // 2. Set CORS headers (So other websites can actually use your API)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 3. Send the response
  res.status(200).json({
    quote: randomQuote
  });
};