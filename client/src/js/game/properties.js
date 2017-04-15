var npmProperties = require('../../../package.json');
var WindowListener = require('../listeners/windowListener');

var Properties = {
  title: 'Phaser JS Boilerplate',
  description: npmProperties.description,
  port: 3017,
  liveReloadPort: 3018,
  mute: false,
  showStats: true,
  size: {
    x: 800,
    y: 600
  },
  analyticsId: 'UA-50892214-2'
};

module.exports = Properties;


