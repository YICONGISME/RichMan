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
var GameEndScene = (function (_super) {
    __extends(GameEndScene, _super);
    function GameEndScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameEndScene.prototype.init = function () {
        this.failed_bg = new egret.Bitmap();
        var texture = RES.getRes("failed_bg_png"); //获取图片绘制位图的纹理
        this.failed_bg.texture = texture;
        this.failed_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.failed_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.failed_bg);
        this.game_end = new egret.TextField();
        this.game_end.y = 250;
        Common.getInstance().align_center(this.game_end, 500, "center");
        this.game_end.fontFamily = Font.MICRO_YAHEI;
        this.game_end.size = 90;
        this.game_end.textColor = 0xEE2C2C;
        this.game_end.strokeColor = 0xEE9A00;
        this.game_end.bold = true;
        this.game_end.text = "游戏结束";
        this.addChild(this.game_end);
        //得分文本
        this.game_score = new egret.TextField();
        this.game_score.y = 400;
        Common.getInstance().align_center(this.game_score, 500, "center");
        this.game_score.fontFamily = Font.MICRO_YAHEI;
        this.game_score.size = 50;
        this.game_score.textColor = Colors.LIGHTYELLOW;
        this.game_score.bold = true;
        this.addChild(this.game_score);
        //下一关
        this.next_level = new egret.TextField();
        this.next_level.y = 700;
        Common.getInstance().align_center(this.next_level, 500, "center");
        this.next_level.fontFamily = Font.MICRO_YAHEI;
        this.next_level.size = 50;
        this.next_level.textColor = Colors.BLACK;
        this.next_level.bold = true;
        this.next_level.touchEnabled = true;
        this.next_level.text = "下一关";
        this.addChild(this.next_level);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    GameEndScene.prototype.onTouchTap = function () {
        GameController.getInstance().gameNextLevel();
    };
    GameEndScene.prototype.setEndScore = function (last_score) {
        this.game_score.text = "您的得分为" + last_score;
    };
    return GameEndScene;
}(egret.Sprite));
__reflect(GameEndScene.prototype, "GameEndScene");
