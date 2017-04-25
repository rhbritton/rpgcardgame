var http = require('http').createServer();
var ios = require('socket.io-express-session');
var io = require('socket.io')(http);
var session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
});
io.use(ios(session));

io.on('connection', function (socket) {
	var cookie = socket.request.headers.cookie;
  var pcookie = connect.utils.parseCookie(cookie);
  var session_id = pcookie["connect.sid"];

	socket.on('isloggedin', function (data) {

  	if(session_id) {
	    session.get(session_id, function(err, sess) {

	      // test against session authkey
	      var sauthkey = socket.get('authkey');

		    console.log('data', data);
		    console.log('session', sauthkey);
		    if(sauthkey && data.authkey == sauthkey) {
		    	socket.emit('isloggedin', { authkey: data.authkey });
		    }
		    else {
		    	// grab authkey from database to compare if no match respond with undefined
		    	socket.emit('isloggedin', { authkey: undefined });
		    }
	    })
	  }

    
  });

  socket.on('login', function (data) {
  	console.log(data)
  	// TODO: check username and password against database with salt

  	// If it passes generate an authkey and store it in both the database and session
  	var authkey = '2099JFJ03J20FFJ';
  	if(session_id) {
	    session.get(session_id, function(err, sess) {
	      // do whatever you want with sess here
	      // ...
	      // if you want to "save" the session for future events
	      socket.set('authkey', authkey);
	    })
	  }

  	socket.emit('login', { authkey: authkey });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});