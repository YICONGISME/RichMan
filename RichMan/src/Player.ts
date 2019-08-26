class Player extends egret.Sprite{
    private player_mc;
    private type;
    private _speed;
    constructor(type){
        super();
        this.type = type;
        this._speed = 10*type;
        this.init();
    }

    private init(){
        //玩家
        this.player_mc = Common.getInstance().buildTypeMc("player_json", "player_png", "player");
        this.player_mc.anchorOffsetX = this.player_mc.width/2;  //設置縮放的錨點，變化更自然
        this.addChild(this.player_mc);
        this.touchEnabled = true;
    }

    public get speed() {
        return this._speed;
    }
    public stop(){
        this.player_mc.stop();
    }
    public run(){
        this.player_mc.play(-1);
        
    }
   
    
}