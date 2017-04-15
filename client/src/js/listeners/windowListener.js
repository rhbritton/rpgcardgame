var WindowListener = {
	resize: function(game, ratio) {
		var gameDims = calcGameDims(ratio);
		game.width = gameDims.width;
		game.height = gameDims.height;
	},
	calcGameDims: calcGameDims
}

function calcGameDims(ratio) {
	var windowRatio = window.innerWidth/window.innerHeight;
	var gameWidth;
	var gameHeight;
	if(ratio >= windowRatio)
	{
		gameWidth = window.innerWidth;
		gameHeight = gameWidth/ratio;
	}
	else
	{
		gameHeight = window.innerHeight;
		gameWidth = gameHeight*ratio;
	}

	return {
		width: gameWidth,
		height: gameHeight
	}
}

module.exports = WindowListener;