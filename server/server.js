var http = require('http').createServer();
var ios = require('socket.io-express-session');
var io = require('socket.io')(http);
io.use(ios(Session));

io.on('connection', function (socket) {
	socket.on('isloggedin', function (data) {
    console.log(data);

    // test against session authkey
    if(socket.handshake.session.authkey && data.authkey == socket.handshake.session.authkey) {
    	socket.emit('isloggedin', { authkey: data.authkey });
    }
    else {
    	// grab authkey from database to compare if no match respond with undefined
    	socket.emit('isloggedin', { authkey: undefined });
    }
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});