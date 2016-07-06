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

        for (i = 0; i < 16; i++) {
            var tile = cc.Sprite.create(res.cover_png);
            this.addChild(tile, 0);
            //タイルを格子状に配置する計算式
            tile.setPosition(49 + i % 4 * 74, 400 - Math.floor(i / 4) * 74);
        }
    },
});
