// 珠宝类
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
var Jewels = (function (_super) {
    __extends(Jewels, _super);
    function Jewels(type) {
        var _this = _super.call(this) || this;
        //分值和速度根据类型确定
        _this.speed = 10 * type;
        _this.score = JewelsType.getScoreByJewelsType(type);
        _this.type = type;
        _this.init();
        return _this;
    }
    Jewels.prototype.init = function () {
        if (this.type == JewelsType.COIN) {
            this.coin_mc = Common.buildTypeMc("coin_json", "coin_png", "coin");
            this.coin_mc.anchorOffsetX = this.coin_mc.width;
            this.coin_mc.anchorOffsetY = this.coin_mc.height;
            this.coin_mc.play(-1);
            // this.coin_tw = egret.Tween.get(this.coin_mc);
            // this.coin_tw.to({ rotation: 200 }, 2000);
            this.addChild(this.coin_mc);
        }
        else if (this.type == JewelsType.SHOE_SHAPED) {
            this.shoe_shaped_mc = Common.buildTypeMc("shoe-shaped_json", "shoe-shaped_png", "shoe-shaped");
            this.shoe_shaped_mc.anchorOffsetX = this.shoe_shaped_mc.width / 2;
            this.shoe_shaped_mc.anchorOffsetY = this.shoe_shaped_mc.height / 2;
            this.addChild(this.shoe_shaped_mc);
            // this.shoe_shaped_tw = egret.Tween.get(this.shoe_shaped,{loop:true});
            // this.shoe_shaped_tw.to({rotation:360},3000);
        }
        else if (this.type == JewelsType.CHEST) {
            this.chest_mc = Common.buildTypeMc("chest_json", "chest_png", "chest");
            this.chest_mc.scaleX = 0.5;
            this.chest_mc.scaleY = 0.5;
            this.chest_mc.anchorOffsetX = this.chest_mc.width / 2;
            this.chest_mc.anchorOffsetY = this.chest_mc.height / 2;
            this.addChild(this.chest_mc);
            // this.chest_tw = egret.Tween.get(this.shoe_shaped,{loop:true});
            // this.chest_tw.to({y:1000,rotation:360},3000);
        }
        else {
            this.bomb_mc = Common.buildTypeMc("bomb_json", "bomb_png", "bomb");
            this.bomb_mc.anchorOffsetX = this.bomb_mc.width / 2;
            this.bomb_mc.anchorOffsetY = this.bomb_mc.height / 2;
            this.addChild(this.bomb_mc);
        }
        egret.Tween.get(this, { loop: true }).to({ rotation: 360 }, 3000);
    };
    Jewels.prototype.getScore = function () {
        return this.score;
    };
    return Jewels;
}(egret.Sprite));
__reflect(Jewels.prototype, "Jewels");
