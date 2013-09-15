enchant();

var drop_px = 32;
var vir = 6;
var row = 5;
window.onload = function () {
    var game = new Game(32 * row, 32 * vir);
    game.fps = 60;

    game.bs = 32;
    game.preload('drops.gif');
    var field = [];
    game.onload = function () {
        var map = new Map(32, 32);
        for (var i = 0; i < row; i++) {
            var tmp = [];
            for (var j = 0; j < vir; j++) {
                var myrand = ~~(Math.random() * 3);
                console.log(myrand);
                tmp[j] = myrand;
            }
            field.push(tmp);
        }
        map.image = game.assets['drops.gif'];
        map.loadData(field);
        game.rootScene.addChild(map);
    };
    game.start();
};
