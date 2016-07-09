var game = new Phaser.Game(640,360, Phaser.AUTO); //.AUTO ensures sytem falls back to canvas incase webGL is not supported

var GameState = {
  preload: function(){

  },
  create: function(){

  },
  update: function(){

  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
