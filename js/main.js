var GameState = {
  //load game assets
  preload: function(){
    this.load.image('background', 'assets/images/background.png');
  },
  create: function(){
    this.background = this.game.add.sprite(0,0,'background');
  },
  update: function(){

  }
};

//initiate phaser
var game = new Phaser.Game(640,360, Phaser.AUTO); //.AUTO ensures sytem falls back to canvas incase webGL is not supported


game.state.add('GameState', GameState);
game.state.start('GameState');
