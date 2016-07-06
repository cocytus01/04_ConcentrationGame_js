//appScene.js

var GameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var gameLayer = new game();
        this.addChild(gameLayer);
    }
});

var game = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

      for(var j = 0; j < 4 ; j++){
      for(var i = 0; i < 4; i++) {
        this.sprite = new cc.Sprite(res.cover_png);
        this.sprite.attr({
                x: size.width * 0.2+70 * i ,
                y: size.height * 0.2+70 * j,
                scale: 1,
                rotation: 0
        });
        this.addChild(this.sprite, 0);
      }
    }
  },
});
