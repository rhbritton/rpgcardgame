var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rpgcardgame');

var randomAuthKey = 'V09JV3209JVJ';

io.on('connection', function (socket) {
	socket.on('isloggedin', function (data) {

    // Handle authkey from localStorage
    console.log(data.authkey);
    if(data.authkey) {
      // check data.authkey against database
      var database = true;
      if(database) {
        console.log(socket.handshake.session)
        socket.handshake.session.user = { authkey: randomAuthKey };
        socket.handshake.session.save();
        console.log(2)
        socket.emit('isloggedin', { authkey: data.authkey });
      }
      else {
        socket.emit('isloggedin', { authkey: undefined });
      }
    }
    else {
      socket.emit('isloggedin', { authkey: undefined });
    }

    // TODO: 
    // If authkey session exists
      // check data.authkey against session
    // else 
      // check data.authkey against database
      // if match set session to to authkey and respond with logged in status

    socket.emit('isloggedin', { authkey: undefined });
  });

  socket.on('login', function (data) {
  	console.log(data)
  	
  	socket.emit('login', { authkey: randomAuthKey });
  });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});