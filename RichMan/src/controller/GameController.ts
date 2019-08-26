/**
 * 
 */
class GameController {
    private static _instance: GameController = null;

    private _gameState = 0; // GameState 0 未开始   1  进行中 2  失败 3 结束

    constructor() {

    }

    public static getInstance() {
        if (this._instance == null) {
            this._instance = new GameController();
        }
        return this._instance;

    }
    //开始游戏之前
    public gameBefore() {
        this._gameState = GameState.GAME_UNSTART;
        SceneManager.getInstance().toStartScene();
    }
    //点击开始游戏
    public gameStart() {
        this._gameState = GameState.GAME_PLAYING;

        //开始游戏
        SceneManager.getInstance().getGameScene().resetGame();
        SceneManager.getInstance().toGameScene();


    }
    //游戏失败结束
    public gameOver() {
        this._gameState = GameState.GAME_OVER;
        //游戏结束调用失败界面
        SceneManager.getInstance().toFailScene();
        //调用动画停止函数
        SceneManager.getInstance().getGameScene().gameOverStop();

    }
    //游戏时间结束
    public gameEnd() {
        this._gameState = GameState.GAME_OVER;
        SceneManager.getInstance().toEndScene();
        SceneManager.getInstance().getGameScene().gameOverStop();

    }

    public gameRestart() {
        if (Number(egret.localStorage.getItem('score')) !== 0) {
            egret.localStorage.setItem('score', '0');
        }
        //调用游戏界面动画重置函数
        SceneManager.getInstance().getGameScene().resetGame();
        //重新开始调用游戏界面
        SceneManager.getInstance().toGameScene();
        this._gameState = GameState.GAME_PLAYING;
        //  其他操作
    }

    public gameNextLevel() {

    }





    /**
     *  addScore
     * 增加金币
     */
    public addScore(score) {
        //某UI 得分
        // localstorage 记录得分
        let before_score = egret.localStorage.getItem('score');
        console.log(before_score);
        let new_score = Number(before_score) + Number(score);
        egret.localStorage.setItem('score', '' + new_score + '');
        console.log(egret.localStorage.getItem('score'));

    }


    public getPlayerScore() {
        console.log("get score");
        return egret.localStorage.getItem('score');
    }


    public get gameState() {
        return this._gameState;
    }
}