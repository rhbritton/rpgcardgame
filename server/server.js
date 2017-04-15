var http = require('http').createServer();
var io = require('socket.io')(http);

io.on('connection', function(socket){
  //console.log('a user connected');
});

io.on('connect', function(socket){
  console.log('a user connected');
});

io.on('disconnect', function(socket){
  console.log('a user disconnected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});