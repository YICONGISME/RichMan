var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 */
var GameController = (function () {
    function GameController() {
        this._gameState = 0; // GameState 0 未开始   1  进行中 2  失败 3 结束
    }
    GameController.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameController();
        }
        return this._instance;
    };
    //开始游戏之前
    GameController.prototype.gameBefore = function () {
        this._gameState = GameState.GAME_UNSTART;
        SceneManager.getInstance().toStartScene();
    };
    //点击开始游戏
    GameController.prototype.gameStart = function () {
        this._gameState = GameState.GAME_PLAYING;
        //开始游戏
        SceneManager.getInstance().getGameScene().resetGame();
        SceneManager.getInstance().toGameScene();
    };
    //游戏失败结束
    GameController.prototype.gameOver = function () {
        this._gameState = GameState.GAME_OVER;
        //游戏结束调用失败界面
        SceneManager.getInstance().toFailScene();
        //调用动画停止函数
        SceneManager.getInstance().getGameScene().gameOverStop();
    };
    //游戏时间结束
    GameController.prototype.gameEnd = function () {
        this._gameState = GameState.GAME_OVER;
        SceneManager.getInstance().toEndScene();
        SceneManager.getInstance().getGameScene().gameOverStop();
    };
    GameController.prototype.gameRestart = function () {
        if (Number(egret.localStorage.getItem('score')) !== 0) {
            egret.localStorage.setItem('score', '0');
        }
        //调用游戏界面动画重置函数
        SceneManager.getInstance().getGameScene().resetGame();
        //重新开始调用游戏界面
        SceneManager.getInstance().toGameScene();
        this._gameState = GameState.GAME_PLAYING;
        //  其他操作
    };
    GameController.prototype.gameNextLevel = function () {
    };
    /**
     *  addScore
     * 增加金币
     */
    GameController.prototype.addScore = function (score) {
        //某UI 得分
        // localstorage 记录得分
        var before_score = egret.localStorage.getItem('score');
        console.log(before_score);
        var new_score = Number(before_score) + Number(score);
        egret.localStorage.setItem('score', '' + new_score + '');
        console.log(egret.localStorage.getItem('score'));
    };
    GameController.prototype.getPlayerScore = function () {
        console.log("get score");
        return egret.localStorage.getItem('score');
    };
    Object.defineProperty(GameController.prototype, "gameState", {
        get: function () {
            return this._gameState;
        },
        enumerable: true,
        configurable: true
    });
    GameController._instance = null;
    return GameController;
}());
__reflect(GameController.prototype, "GameController");
