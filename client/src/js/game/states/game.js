var game = {};
var Pages = require('../../pages/base');
var io = require('socket.io-client');
var socket = io('http://localhost:3000');

game.create = function () {
	socket.emit('connect', function(){});
	// socket.on('event', function(data){});
	// socket.emit('disconnect', function(){});

	Pages.Login.create.call(this);
};

game.update = function () {

};

module.exports = game;
