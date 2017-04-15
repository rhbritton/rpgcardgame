var game = {};
var Pages = require('../../pages/base');
var io = require('socket.io-client');
var socket = io('http://localhost:3000');

game.create = function () {
	socket.emit('isloggedin', { authkey: '83O7FGB22OH2' });
	socket.on('isloggedin', function(res) {		
		console.log('response', res)
	});
	// socket.on('event', function(data){});
	// socket.emit('disconnect', function(){});

	Pages.Login.create.call(this);
};

game.update = function () {

};

module.exports = game;
