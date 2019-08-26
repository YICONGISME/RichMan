
//boss类
class Boss extends egret.Sprite {
    private boss_mc;
    private type;
    private speed;
    private boss_randomX;
    private stage_width;
    private last_randomX;
    private boss_time;
    private throw_jewels_time;
    private last_throw_time= egret.getTimer() ;
    constructor(type) {
        super();
        this.type = type;
        this.speed = 0.1 * type;
        this.init();
    }

    private init() {
        //boss
        this.boss_mc = Common.getInstance().buildTypeMc("boss_json", "boss_png", "boss");
        this.boss_mc.anchorOffsetX = this.boss_mc.width / 2;  //設置縮放的錨點，變化更自然
        this.addChild(this.boss_mc);
       
        this.stage_width = egret.MainContext.instance.stage.stageWidth;
        //给boss的每一帧设置一个侦听动画
        //boss的随机坐标
    }

    public run() {
        this.boss_mc.play(-1);
        this.boss_randomX = Math.random() * this.stage_width - 50;
        this.boss_time = Math.abs(this.boss_randomX - this.x) / this.speed;
        // console.log(this.boss_time);
        //设置一个移动的动画
        egret.Tween.get(this).to({ x: this.boss_randomX }, this.boss_time);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    }

    public stop() {
        this.boss_mc.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    }

    private enterFrame(e) {
       if( GameController.getInstance().gameState !== 1) {
            return;
       }


        let now = egret.getTimer();
        
        if (this.boss_randomX == this.x) {
            this.boss_walk_to_new_place();
        }
        if (this.last_throw_time + 1000 <= now) {   // 1000 要转为一个 可以设置的值
            this.throwJewels();
        }
    }

    private boss_walk_to_new_place() {
        // console.log(this.x);
        //判断boss现在的位置和随机的坐标是否相等，相等则重新随机坐标，
        this.last_randomX = this.boss_randomX;
        this.boss_randomX = (Math.random() * this.stage_width - 50)>0 ? Math.random() * this.stage_width - 50 : 10;
        this.boss_time = Math.abs(this.boss_randomX - this.last_randomX) / this.speed;
        if (this.boss_randomX < this.x) {
            this.boss_mc.scaleX = -1;
            egret.Tween.get(this).to({ x: this.boss_randomX }, this.boss_time);
        } else {
            this.boss_mc.scaleX = 1;
            egret.Tween.get(this).to({ x: this.boss_randomX }, this.boss_time);
        }
    }
    private throwJewels() {
        this.last_throw_time = egret.getTimer();
        let random_jewel = Math.floor(Math.random() * JewelsType.COUNT);
        // console.log("jewel type" + random_jewel);
        SceneManager.getInstance().getGameScene().addJewels(random_jewel);
    }
}