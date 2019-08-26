var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this._speed = 10 * type;
        _this.init();
        return _this;
    }
    Player.prototype.init = function () {
        //玩家
        this.player_mc = Common.getInstance().buildTypeMc("player_json", "player_png", "player");
        this.player_mc.anchorOffsetX = this.player_mc.width / 2; //設置縮放的錨點，變化更自然
        this.addChild(this.player_mc);
        this.touchEnabled = true;
    };
    Object.defineProperty(Player.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.stop = function () {
        this.player_mc.stop();
    };
    Player.prototype.run = function () {
        this.player_mc.play(-1);
    };
    return Player;
}(egret.Sprite));
__reflect(Player.prototype, "Player");
