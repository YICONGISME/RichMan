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
// 开始游戏之前场景
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartScene.prototype.init = function () {
        //使用单例模式，无需再实例化，否则会有多个控制器实例，造成混乱
        // this.sceneManager = new SceneManager();
        //开始游戏背景
        this.start_bg = new egret.Bitmap();
        this.start_bg.texture = RES.getRes("bg_png");
        // this.start_bg.fillMode = egret.BitmapFillMode.CLIP;
        this.start_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.start_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.start_bg);
        //开始游戏文本
        this.startGameText = new egret.TextField();
        Common.getInstance().align_center(this.startGameText, 500, "center");
        this.startGameText.y = egret.MainContext.instance.stage.stageHeight - 200;
        this.startGameText.width = 500;
        this.startGameText.size = 70;
        this.startGameText.fontFamily = Font.KAITI;
        this.startGameText.textColor = Colors.GOLD;
        this.startGameText.bold = true;
        this.startGameText.text = Language.START_GAME_TEXT;
        this.addChild(this.startGameText);
        this.startGameText.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    //开始游戏侦听函数，通过场景管理器跳转游戏场景
    StartScene.prototype.startGame = function (evt) {
        GameController.getInstance().gameStart();
    };
    return StartScene;
}(egret.Sprite));
__reflect(StartScene.prototype, "StartScene");
