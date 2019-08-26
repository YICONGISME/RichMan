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
//boss类
var Boss = (function (_super) {
    __extends(Boss, _super);
    function Boss(type) {
        var _this = _super.call(this) || this;
        _this.last_throw_time = egret.getTimer();
        _this.type = type;
        _this.speed = 0.1 * type;
        _this.init();
        return _this;
    }
    Boss.prototype.init = function () {
        //boss
        this.boss_mc = Common.getInstance().buildTypeMc("boss_json", "boss_png", "boss");
        this.boss_mc.anchorOffsetX = this.boss_mc.width / 2; //設置縮放的錨點，變化更自然
        this.addChild(this.boss_mc);
        this.stage_width = egret.MainContext.instance.stage.stageWidth;
        //给boss的每一帧设置一个侦听动画
        //boss的随机坐标
    };
    Boss.prototype.run = function () {
        this.boss_mc.play(-1);
        this.boss_randomX = Math.random() * this.stage_width - 50;
        this.boss_time = Math.abs(this.boss_randomX - this.x) / this.speed;
        // console.log(this.boss_time);
        //设置一个移动的动画
        egret.Tween.get(this).to({ x: this.boss_randomX }, this.boss_time);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    };
    Boss.prototype.stop = function () {
        this.boss_mc.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    };
    Boss.prototype.enterFrame = function (e) {
        if (GameController.getInstance().gameState !== 1) {
            return;
        }
        var now = egret.getTimer();
        if (this.boss_randomX == this.x) {
            this.boss_walk_to_new_place();
        }
        if (this.last_throw_time + 1000 <= now) {
            this.throwJewels();
        }
    };
    Boss.prototype.boss_walk_to_new_place = function () {
        // console.log(this.x);
        //判断boss现在的位置和随机的坐标是否相等，相等则重新随机坐标，
        this.last_randomX = this.boss_randomX;
        this.boss_randomX = (Math.random() * this.stage_width - 50) > 0 ? Math.random() * this.stage_width - 50 : 10;
        this.boss_time = Math.abs(this.boss_randomX - this.last_randomX) / this.speed;
        if (this.boss_randomX < this.x) {
            this.boss_mc.scaleX = -1;
            egret.Tween.get(this).to({ x: this.boss_randomX }, this.boss_time);
        }
        else {
            this.boss_mc.scaleX = 1;
            egret.Tween.get(this).to({ x: this.boss_randomX }, this.boss_time);
        }
    };
    Boss.prototype.throwJewels = function () {
        this.last_throw_time = egret.getTimer();
        var random_jewel = Math.floor(Math.random() * JewelsType.COUNT);
        // console.log("jewel type" + random_jewel);
        SceneManager.getInstance().getGameScene().addJewels(random_jewel);
    };
    return Boss;
}(egret.Sprite));
__reflect(Boss.prototype, "Boss");
