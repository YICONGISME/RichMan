class GameScene extends egret.Sprite {
    private boss_mc: Boss;
    private game_bg: egret.Bitmap;
    private player_mc: Player;
    private time:egret.Timer;
    private countTimeStart;
    private getScore:egret.TextField;
    private count;
    // private coin_mc;
    private player_score: egret.TextField;
    constructor() {
        super();
        this.init();
    }
    private init() {

        this.touchEnabled = true;
        this.touchChildren = true;
        //游戏中的背景
        this.game_bg = new egret.Bitmap();
        this.game_bg.texture = RES.getRes("game_bg_png");
        // this.game_bg.fillMode = egret.BitmapFillMode.CLIP;
        this.game_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.game_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.game_bg);

        //boss
        this.boss_mc = new Boss(BossType.BOSS_1);
        this.boss_mc.y = 100;
        this.addChild(this.boss_mc);
        this.boss_mc.run();

        this.player_mc = new Player(PlayerType.Player_1);
        this.player_mc.y = 1000;
        this.player_mc.run();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchStop, this);

        this.addChild(this.player_mc);

        this.player_score = new egret.TextField();
        this.player_score.textColor = Colors.DARKRED;
        Common.getInstance().align_center(this.player_score, 150, "right");
        this.player_score.y = 20;
        this.player_score.size = 40;
        this.player_score.text = "得分0";
        this.addChild(this.player_score);

        egret.localStorage.setItem('score', '0');
        //游戏结束
        // this.time.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimeOver,this);
        // this.time.start();
        //开始的时间
        this.countTimeStart = egret.getTimer();
        //每一帧监听
        this.addEventListener(egret.TouchEvent.ENTER_FRAME,this.countTime,this);
    }
    public countTime(){
        if (GameController.getInstance().gameState == 1) {
            let now = egret.getTimer();
            let pass = now - this.countTimeStart;
            this.count = 60 - Math.floor(pass / 1000);//获取倒计时

            if (this.count == 0) {
                // GameController.getInstance().gameEnd();
                console.log("时间到")
            }else{

            }
            console.log("倒计时: ", this.count);
            //设置倒计时文本
            // GameController.getInstance().gameEnd().getCountDown().text = Language.COUNT_DOWN_TEXT + this.count + "秒";
        }
        return this.count;
    }
    

    //珠宝显示在页面上
    public addJewels(jewels_type = JewelsType.BOMB) {

        if (GameController.getInstance().gameState == 1) {
            let item = new Jewels(jewels_type);
            item.x = this.boss_mc.x;
            item.y = 100;
            this.addChild(item);
            egret.Tween.get(item).to({ y: 1000 }, 2000).call(() => {
                if (Math.abs(this.player_mc.x - item.x) < 100) { // 可配置的 任意值
                    //记分牌  得分
                    console.log(jewels_type);
                    if (jewels_type == 0) {
                        console.log("die");
                        //调用失败界面
                        GameController.getInstance().gameOver();

                    } else {
                        console.log('得分');
                        GameController.getInstance().addScore(item.getScore());
                        this.player_score.text = "得分" + GameController.getInstance().getPlayerScore() + "";

                    }
                }
                if (this.contains(item)) {
                    this.removeChild(item);
                }
            });
        }

    }
    //重试函数
    public resetGame() {
        this.player_score.text = "得分" + GameController.getInstance().getPlayerScore() + "";
        this.boss_mc.x = 0;
        this.player_mc.x = 0;
        this.boss_mc.run();
        this.player_mc.run();
        // this.time  重置
        console.log("this.resetgame");

    }

    public gameOverStop() {
        console.log("this.gameover");
        this.boss_mc.stop();
        this.player_mc.stop();
    }

    //触摸点击事件
    private onTouchMove(evt) {
        //evt.stageX鼠标点击的位置

        if (evt.stageX > this.player_mc.x) {
            this.player_mc.scaleX = 1;
            egret.Tween.get(this.player_mc).to({ x: evt.stageX - this.player_mc.width / 2 }, Math.abs(evt.stageX - this.player_mc.x) / this.player_mc.speed);
        } else {
            this.player_mc.scaleX = -1;//玩家反轉
            egret.Tween.get(this.player_mc).to({ x: evt.stageX + this.player_mc.width / 2 }, Math.abs(evt.stageX - this.player_mc.x) / this.player_mc.speed);

        }

    }
    //触摸暂停时事件
    private onTouchStop(evt: egret.TouchEvent) {
        egret.Tween.pauseTweens(evt.target);
    }



}