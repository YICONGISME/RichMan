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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    SceneManager.prototype.init = function () {
        this.startScene = new StartScene();
        this._gameScene = new GameScene();
        this.failScene = new FailScene();
        this.endScene = new GameEndScene();
    };
    // 实例化多个管理类会出错，所以创建单例模式
    SceneManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    //跳转游戏场景
    SceneManager.prototype.toGameScene = function () {
        if (this.contains(this.startScene)) {
            this.removeChild(this.startScene);
        }
        this.addChild(this._gameScene);
        if (this.contains(this.failScene)) {
            this.removeChild(this.failScene);
        }
        if (this.contains(this.endScene)) {
            this.removeChild(this.endScene);
        }
    };
    //跳转开始场景
    SceneManager.prototype.toStartScene = function () {
        this.addChild(this.startScene);
        //判断其他场景在，需要删除
        if (this.contains(this._gameScene)) {
            this.removeChild(this._gameScene);
        }
        if (this.contains(this.failScene)) {
            this.removeChild(this.failScene);
        }
        if (this.contains(this.endScene)) {
            this.removeChild(this.endScene);
        }
    };
    //跳转失败场景
    SceneManager.prototype.toFailScene = function () {
        this.addChild(this.failScene);
        if (this.contains(this.startScene)) {
            this.removeChild(this.startScene);
        }
        if (this.contains(this._gameScene)) {
            // console.log("remove gamescene");
            this.removeChild(this._gameScene);
        }
        if (this.contains(this.endScene)) {
            this.removeChild(this.endScene);
        }
    };
    //跳转结束场景
    SceneManager.prototype.toEndScene = function () {
        this.addChild(this.endScene);
        if (this.contains(this.startScene)) {
            this.removeChild(this.startScene);
        }
        if (this.contains(this._gameScene)) {
            console.log("remove failscene");
            this.removeChild(this._gameScene);
        }
        if (this.contains(this.failScene)) {
            this.removeChild(this.failScene);
        }
    };
    SceneManager.prototype.getGameScene = function () {
        return this._gameScene;
    };
    SceneManager.prototype.getFailScene = function () {
        return this.failScene;
    };
    SceneManager.prototype.getEndScene = function () {
        return this.endScene;
    };
    SceneManager.instance = null;
    return SceneManager;
}(egret.DisplayObjectContainer));
__reflect(SceneManager.prototype, "SceneManager");
