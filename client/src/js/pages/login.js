var localStorage = require('localStorage');

var Login = {
	preload: function() {  		
  		this.game.load.image('login:background', 'images/phaser.png');
  		this.game.load.spritesheet('login:loginButton', 'images/login/loginButton.png', 201, 71);
	},
	create: create
};

function create() {

	var background = addBackground.call(this);
	var loginButton = addLoginButton.call(this);
	var usernameInput = addUsernameInput.call(this);
	var passwordInput = addPasswordInput.call(this);

	function addBackground() {
		var background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'login:background');
		background.anchor.setTo(0.5, 0.5);

		return background;
	}

	function addLoginButton() {
		var loginButton = this.game.add.sprite(
			this.game.world.centerX-100, 
			this.game.world.centerY, 
			'login:loginButton'
		);
		loginButton.inputEnabled = true;
		loginButton.events.onInputDown.add(mousedown, this);
		loginButton.events.onInputUp.add(mouseup, this);

		function mousedown() {
			loginButton.animations.add('mousedown');
			loginButton.animations.play('mousedown', 201);
		}

		function mouseup() {
			loginButton.animations.add('mouseup');
			loginButton.animations.play('mouseup', 402);

			this._socket.emit('login', { username:usernameInput.value, password:passwordInput.value });
		}

		return loginButton;
	}

	function addUsernameInput() {
		var username = this.game.add.inputField(this.game.world.centerX-83, this.game.world.centerY-90, {
		    font: '18px Arial',
		    fill: '#212121',
		    fontWeight: 'bold',
		    width: 150,
		    padding: 8,
		    borderWidth: 1,
		    borderColor: '#000',
		    borderRadius: 6,
		    placeHolder: 'Username',
		    type: PhaserInput.InputType.text
		});

		return username;
	}

	function addPasswordInput() {
		var password = this.game.add.inputField(this.game.world.centerX-83, this.game.world.centerY-45, {
		    font: '18px Arial',
		    fill: '#212121',
		    fontWeight: 'bold',
		    width: 150,
		    padding: 8,
		    borderWidth: 1,
		    borderColor: '#000',
		    borderRadius: 6,
		    placeHolder: 'Password',
		    type: PhaserInput.InputType.password
		});

		return password;
	}

	this._socket.on('login', function(data) {
		console.log('data', data);

		// store authkey in localstorage
		localStorage.setItem('authkey', data.authkey);
	});

}

module.exports = Login;