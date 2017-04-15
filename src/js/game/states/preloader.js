var preloader = {};
var properties = require('../properties');
var Pages = require('../../pages/base');

preloader.preload = function () {
	var self = this;

	// Register plugins
	this.game.add.plugin(PhaserInput.Plugin);

	// Preload all page contents
	for(var page in Pages)
		Pages[page].preload.call(self);
};

preloader.create = function () {
  this.game.state.start('game');
};

module.exports = preloader;
