const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

//Middleware:
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });