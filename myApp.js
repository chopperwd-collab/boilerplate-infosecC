const express = require('express');
const app = express();
const helmet = require('helmet');

// 1. Middleware setup
app.use(helmet());
app.disable('strict-transport-security');
app.use(express.static('public'));

// 2. API Routes
const api = require('./server.js');
app.use('/_api', api);

// 3. Main Route
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// 4. Server Listener (Keep this last)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

// 5. Final Export
module.exports = app;


// depoly test