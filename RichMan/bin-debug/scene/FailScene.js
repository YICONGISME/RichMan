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
var FailScene = (function (_super) {
    __extends(FailScene, _super);
    function FailScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    FailScene.prototype.init = function () {
        this.failed_bg = new egret.Bitmap();
        var texture = RES.getRes("failed_bg_png"); //获取图片绘制位图的纹理
        this.failed_bg.texture = texture;
        this.failed_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.failed_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.failed_bg);
        this.game_failed = new egret.TextField();
        this.game_failed.y = 250;
        Common.align_center(this.game_failed, 500, "center");
        this.game_failed.fontFamily = Font.MICRO_YAHEI;
        this.game_failed.size = 90;
        this.game_failed.textColor = 0xEE2C2C;
        this.game_failed.strokeColor = 0xEE9A00;
        this.game_failed.bold = true;
        this.game_failed.text = "你接到炸弹啦！";
        this.addChild(this.game_failed);
        //重试文本
        this.retry = new egret.TextField();
        this.retry.y = 700;
        Common.align_center(this.retry, 100, "left");
        this.retry.fontFamily = Font.MICRO_YAHEI;
        this.retry.size = 50;
        this.retry.textColor = 0xEE9A00;
        this.retry.strokeColor = 0xEE9A00;
        this.retry.bold = true;
        this.retry.touchEnabled = true;
        this.retry.text = "重试";
        this.addChild(this.retry);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    FailScene.prototype.onTouchTap = function () {
        GameController.getInstance().gameRestart();
    };
    return FailScene;
}(egret.Sprite));
__reflect(FailScene.prototype, "FailScene");
