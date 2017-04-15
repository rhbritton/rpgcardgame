var Home = {
	preload: function () {
  		this.game.load.image('home:background', 'images/phaser.png');
  		this.game.load.spritesheet('home:logoutButton', 'images/login/loginButton.png', 201, 71);
	},
	create: function () {
		var background = addBackground.call(this);
		var logoutButton = addLogoutButton.call(this);
	}
};

function addBackground() {
	var background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'login:background');
	background.anchor.setTo(0.5, 0.5);

	return background;
}

function addLogoutButton() {
	var logoutButton = this.game.add.sprite(
		this.game.world.centerX-100, 
		this.game.world.centerY, 
		'home:logoutButton'
	);
	logoutButton.inputEnabled = true;
	logoutButton.events.onInputDown.add(mousedown, this);
	logoutButton.events.onInputUp.add(mouseup, this);

	function mousedown() {
		logoutButton.animations.add('mousedown');
		logoutButton.animations.play('mousedown', 201);
	}

	function mouseup() {
		logoutButton.animations.add('mouseup');
		logoutButton.animations.play('mouseup', 402);
	}

	return logoutButton;
}

module.exports = Home;