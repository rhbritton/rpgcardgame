var _ = require('lodash');
var Properties = require('./properties');
var WindowListener = require('../listeners/windowListener');

var states = {
  boot: require('./states/boot.js'),
  preloader: require('./states/preloader.js'),
  game: require('./states/game.js')
};

Properties.size.ratio = Properties.size.x/Properties.size.y;
var gameDims = WindowListener.calcGameDims(Properties.size.ratio);
Properties.size.x = gameDims.width;
Properties.size.y = gameDims.height;

var game = new Phaser.Game(Properties.size.x, Properties.size.y, Phaser.AUTO, 'game');

window.onresize = function() {
	WindowListener.resize(game, Properties.size.ratio);
}

// Automatically register each state.
_.each(states, function(state, key) {
  game.state.add(key, state);
});

game.state.start('boot');