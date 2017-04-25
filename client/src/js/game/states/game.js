var game = {};
var Pages = require('../../pages/base');
var io = require('socket.io-client');
var socket = io('http://localhost:3000');

game.create = function () {
	var self = this;
	self._socket = socket;

	var authkey = localStorage.getItem('authkey');
	socket.emit('isloggedin', { authkey: authkey });
	socket.on('isloggedin', function(res) {
		console.log('response', res)

		if(!res.authkey)
			Pages.Login.create.call(self);
		else
			Pages.Home.create.call(self);
	});
};

game.update = function () {

};

module.exports = game;
