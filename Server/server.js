const express = require('express');
//const proxy = require('http-proxy-middleware');
const mongoose = require('mongoose');
const routes = require('./routes');
//const socketio = require('socket.io');
const port = process.env.PORT || 3001;
const app = express();

//Middleware:
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Define routes
app.use(routes);

//Setup proxy:
// app.use(
//   '/api',
//   proxy({target: port, changeOrigin: true})
// );

//Start up the mongoose server:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

//Start up our server:
app.listen(port, () => {
  console.log(`🌎 ==> API server now on port ${port}!`);
});


//---------- SOCKET IO ----------
//Start up our socket.io server:
// const server = app.listen(port, () => {
//     console.log(`🌎 ==> API server now on port ${port}!`);
//   });

// const io = socketio(server);  
// //What we want to do is have the socket connection fire when a user saves a book. 
// io.on('connection', (socket) =>{
//   console.log("connected to socket", socket.id);
//    socket.on('saveBook', (data) =>{
//      console.log(data);
//      socket.emit('bookSaved', data)
//    })
// });