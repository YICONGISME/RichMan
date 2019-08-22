class SceneManager extends egret.DisplayObjectContainer{

    private startScene:StartScene;
    private gameScene:GameScene;
    private failScene:FailScene;
    private  static instance=null;

    constructor(){
        super();
        this.init();

    }
    private init(){
        this.startScene = new StartScene();
        this.gameScene = new GameScene();
        this.failScene = new FailScene();
    }
    // 实例化多个管理类会出错，所以创建单例模式
    public static getInstance(){
        if(this.instance == null){
            this.instance = new SceneManager();
        }
        return this.instance;
    }
    //跳转游戏场景
    public toGameScene(){
        this.addChild(this.gameScene);
        if(this.contains(this.startScene)){
            this.removeChild(this.startScene);
            
        }
        if(this.contains(this.failScene)){
            this.removeChild(this.failScene);
            
        }
    }
    //跳转开始场景
    public toStartScene(){
        
        this.addChild(this.startScene);
        //判断其他场景在，需要删除
        if(this.contains(this.gameScene)){
            this.removeChild(this.gameScene);

        }
        if(this.contains(this.failScene)){
            this.removeChild(this.failScene);
            
        }
    }
    //跳转失败场景
    public toFailScene(){
        
        this.addChild(this.failScene);
        if(this.contains(this.startScene)){
            this.removeChild(this.startScene);
            
        }
        if(this.contains(this.gameScene)){
            this.removeChild(this.gameScene);
            
        }
    }
}