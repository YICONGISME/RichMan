
//boss类
class Boss extends egret.Sprite {
    private boss_mc;
    private type;
    private speed;
    // boss原本位置
    private last_position;
    // boss 目标位置
    private target_position;
    // boss isLeft 向左
    private isLeft = false

    private stage_width;
    private throw_jewels_time;
    private last_throw_time = egret.getTimer();
    constructor(type) {
        super();
        this.type = type;
        this.speed = 0.1 * type;
        this.init();
    }

    private init() {
        //boss
        this.boss_mc = Common.buildTypeMc("boss_json", "boss_png", "boss");
        this.boss_mc.anchorOffsetX = this.boss_mc.width / 2;  //設置縮放的錨點，變化更自然
        this.addChild(this.boss_mc);


        this.stage_width = egret.MainContext.instance.stage.stageWidth;


        this.x = this.stage_width / 2;
        //给boss的每一帧设置一个侦听动画
        //boss的随机坐标
    }

    public run() {
        this.boss_mc.play(-1);
        this.x = this.stage_width / 2;
        this.isLeft = false;
        this.boss_walk_to_new_place();
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    }

    public stop() {
        this.boss_mc.stop();
        egret.Tween.removeTweens(this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    }

    private enterFrame(e) {
        if (GameController.getInstance().gameState !== 1) {
            return;
        }


        let now = egret.getTimer();

    
        if (this.x === this.target_position) {
            this.boss_walk_to_new_place();
        }

        // if (this.x > this.target_position && this.isLeft === false ) {
        //     this.boss_walk_to_new_place();
        // }
        // if (this.x < this.target_position && this.isLeft) {
        //     this.boss_walk_to_new_place();
        // }
        if (this.last_throw_time + 1000 <= now) {   // 1000 要转为一个 可以设置的值
            this.throwJewels();
        }
    }

    private boss_walk_to_new_place() {
        // console.log(this.x);
        //判断boss现在的位置和随机的坐标是否相等，相等则重新随机坐标，
        this.last_position = this.x;

        if (this.isLeft) {
            this.target_position = this.stage_width * 3 / 4 + (Math.random() * this.stage_width / 4) - this.width;
            this.boss_mc.scaleX = 1;
            this.isLeft = false;
        } else {
            this.target_position = (Math.random() * this.stage_width / 4) + this.width;
            this.boss_mc.scaleX = -1;
            this.isLeft = true;
           
        }
        let boss_time = Math.abs(this.target_position - this.last_position) / this.speed;
        egret.Tween.get(this).to({ x: this.target_position }, boss_time);
    }



    private throwJewels() {
        this.last_throw_time = egret.getTimer();
        let random_jewel = Math.floor(Math.random() * JewelsType.COUNT);
        // console.log("jewel type" + random_jewel);
        SceneManager.getInstance().getGameScene().addJewels(random_jewel);
    }

    // public reset() {
    //     this.x = this.stage_width / 2;
    // }
}