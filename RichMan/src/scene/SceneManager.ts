class SceneManager extends egret.DisplayObjectContainer {

    private startScene: StartScene;
    private _gameScene: GameScene;
    private failScene: FailScene;
    private endScene:GameEndScene;
    private static instance: SceneManager = null;

    constructor() {
        super();
        this.init();

    }
    private init() {
        this.startScene = new StartScene();
        this._gameScene = new GameScene();
        this.failScene = new FailScene();
        // this.endScene = new GameEndScene();
    }
    // 实例化多个管理类会出错，所以创建单例模式
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    }
    //跳转游戏场景
    public toGameScene() {
        this.addChild(this._gameScene);
        if (this.contains(this.startScene)) {
            this.removeChild(this.startScene);

        }
        if (this.contains(this.failScene)) {
            this.removeChild(this.failScene);

        }
        // if (this.contains(this.endScene)) {
        //     this.removeChild(this.endScene);

        // }
    }
    //跳转开始场景
    public toStartScene() {

        this.addChild(this.startScene);
        //判断其他场景在，需要删除
        if (this.contains(this._gameScene)) {
            this.removeChild(this._gameScene);
        }
        if (this.contains(this.failScene)) {
            this.removeChild(this.failScene);

        }
        // if (this.contains(this.endScene)) {
        //     this.removeChild(this.endScene);

        // }
    }
    //跳转失败场景
    public toFailScene() {

        this.addChild(this.failScene);
        if (this.contains(this.startScene)) {
            this.removeChild(this.startScene);

        }
        if (this.contains(this._gameScene)) {
            // console.log("remove gamescene");
            this.removeChild(this._gameScene);

        }
        // if (this.contains(this.endScene)) {
        //     this.removeChild(this.endScene);

        // }
    }
    //跳转失败场景
    // public toEndScene() {

    //     this.addChild(this.endScene);
    //     if (this.contains(this.startScene)) {
    //         this.removeChild(this.startScene);

    //     }
    //     if (this.contains(this._gameScene)) {
    //         console.log("remove failscene");
    //         this.removeChild(this._gameScene);

    //     }
    //     if (this.contains(this.failScene)) {
    //         this.removeChild(this.failScene);

    //     }
    // }
    public getGameScene() {
        return this._gameScene;
    }
    public getFailScene() {
        return this.failScene;
    }

    // public getEndScene(){
    //     return this.endScene;
    // }
}