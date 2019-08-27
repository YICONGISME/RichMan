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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.itemsInStage = [];
        _this.init();
        return _this;
    }
    GameScene.prototype.init = function () {
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
        this.player_mc.y = 800;
        this.player_mc.run();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchStop, this);
        this.addChild(this.player_mc);
        this.player_score = new egret.TextField();
        this.player_score.textColor = Colors.DARKRED;
        Common.align_center(this.player_score, 150, "right");
        this.player_score.y = 20;
        this.player_score.size = 40;
        this.player_score.text = "得分0";
        this.addChild(this.player_score);
        //倒计时文本
        this.countDown = new egret.TextField();
        this.countDown.x = egret.MainContext.instance.stage.stageWidth - 150;
        this.countDown.textAlign = "center";
        this.countDown.fontFamily = Font.MICRO_YAHEI;
        this.countDown.size = 30;
        this.countDown.textColor = 0xEE2C2C;
        this.countDown.strokeColor = 0xEE9A00;
        // this.countDown.text = SceneManager.getInstance().getGameScene().countTime();
        this.addChild(this.countDown);
        egret.localStorage.setItem('score', '0');
        //游戏结束
        // this.time.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimeOver,this);
        // this.time.start();
        //开始的时间
        //每一帧监听
        // this.countTimeStart = egret.getTimer();
    };
    GameScene.prototype.countTime = function () {
        var _this = this;
        // 倒计时
        if (GameController.getInstance().gameState == 1) {
            var now = egret.getTimer();
            var pass = now - this.countTimeStart;
            this.count = 60 - Math.floor(pass / 1000); //获取倒计时
            if (this.count <= 0) {
                this.count = 0;
                this.last_score = GameController.getInstance().getPlayerScore();
                console.log("时间到");
                SceneManager.getInstance().getEndScene().setEndScore(this.last_score);
                GameController.getInstance().gameEnd();
            }
            else {
            }
            console.log("倒计时: ", this.count);
            //设置倒计时文本
            this.countDown.text = Language.COUNT_DOWN_TEXT + this.count + "秒";
        }
        // console.log(this.player_mc.x);
        // console.log(this.targetX);
        // console.log(egret.MainContext.instance.stage.stageWidth);
        // 人物移动
        //如果还没到达目标
        if (this.player_mc.x - this.targetX > 0) {
            //当小于速度之后，就让他等于目标
            if (this.player_mc.x - this.targetX < this.player_mc.speed) {
                this.player_mc.x = this.targetX;
            }
            else {
                //否则继续移动，每一帧都增加速度的距离
                if (this.player_mc.x > this.player_mc.width) {
                    this.player_mc.x -= this.player_mc.speed;
                }
            }
        }
        else {
            if (this.targetX - this.player_mc.x < this.player_mc.speed) {
                this.player_mc.x = this.targetX;
            }
            else {
                if (this.player_mc.x < egret.MainContext.instance.stage.stageWidth - this.player_mc.width) {
                    // this.player_mc.x =  egret.MainContext.instance.stage.stageWidth;
                    this.player_mc.x += this.player_mc.speed;
                }
            }
        }
        //限制走到屏幕两边就停止
        // 如果 速度出现不一样  那么 有可能后扔的物品 先到地面  所以使用循环 遍历所有的 是否与玩家接触
        // for() {
        // }
        if (this.itemsInStage.length > 0) {
            if (this.player_mc.hitTestPoint(this.itemsInStage[0].x, this.itemsInStage[0].y)) {
                console.log(this.itemsInStage[0].getType());
                if (this.itemsInStage[0].getType() == 0) {
                    console.log("die");
                    //调用失败界面
                    GameController.getInstance().gameOver();
                }
                else {
                    console.log('得分');
                    GameController.getInstance().addScore(this.itemsInStage[0].getScore());
                    this.player_score.text = "得分" + GameController.getInstance().getPlayerScore() + "";
                    var tip_1 = new egret.TextField();
                    tip_1.text = "+" + this.itemsInStage[0].getScore() + "";
                    tip_1.y = this.player_mc.y - tip_1.height;
                    tip_1.x = this.player_mc.x - tip_1.width;
                    tip_1.textColor = Colors.DARKORANGE;
                    this.addChild(tip_1);
                    egret.Tween.get(tip_1).to({ y: tip_1.y - 20, alpha: 0 }, 500).call(function () {
                        if (_this.contains(tip_1)) {
                            _this.removeChild(tip_1);
                            tip_1 = null;
                        }
                    });
                    if (this.contains(this.itemsInStage[0])) {
                        this.removeChild(this.itemsInStage[0]);
                        this.removeItem(this.itemsInStage[0]);
                    }
                }
            }
        }
        // if (Math.abs(this.player_mc.x - item.x) < 50) { // 可配置的 任意值
        //     //记分牌  得分
        //     console.log(jewels_type);
        //     if (jewels_type == 0) {
        //         console.log("die");
        //         //调用失败界面
        //         GameController.getInstance().gameOver();
        //     } else {
        //         console.log('得分');
        //         GameController.getInstance().addScore(item.getScore());
        //         this.player_score.text = "得分" + GameController.getInstance().getPlayerScore() + "";
        //         let tip = new egret.TextField();
        //         tip.text = "+"+item.getScore()+"";
        //         tip.y = this.player_mc.y-tip.height;
        //         tip.x = this.player_mc.x-tip.width;
        //         tip.textColor = Colors.DARKORANGE;
        //         this.addChild(tip);
        //         egret.Tween.get(tip).to({y:tip.y-20,alpha:0},500).call(()=>{
        //             if(this.contains(tip)){
        //                 this.removeChild(tip);
        //                 tip = null;
        //             }
        //         });
        //     }
        // }
        // return this.count;
    };
    //珠宝显示在页面上
    GameScene.prototype.addJewels = function (jewels_type) {
        var _this = this;
        if (jewels_type === void 0) { jewels_type = JewelsType.BOMB; }
        if (GameController.getInstance().gameState == GameState.GAME_PLAYING) {
            var item_1 = new Jewels(jewels_type);
            item_1.x = this.boss_mc.x;
            item_1.y = 100;
            this.addChild(item_1);
            this.itemsInStage.push(item_1);
            egret.Tween.get(item_1).to({ y: 850 }, 2000).call(function () {
                if (_this.contains(item_1)) {
                    _this.removeChild(item_1);
                    _this.removeItem(item_1);
                }
            });
        }
    };
    //重试函数
    GameScene.prototype.resetGame = function () {
        this.countTimeStart = egret.getTimer();
        this.player_score.text = "得分" + GameController.getInstance().getPlayerScore() + "";
        this.player_mc.x = egret.MainContext.instance.stage.stageWidth / 2;
        this.boss_mc.run();
        this.player_mc.run();
        // this.time  重置
        console.log("this.resetgame");
        //在开始时添加侦听事件
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.countTime, this);
        this.clearItems();
    };
    GameScene.prototype.clearItems = function () {
        for (var i = 0; i < this.itemsInStage.length; i++) {
            if (this.contains(this.itemsInStage[i])) {
                this.removeChild(this.itemsInStage[i]);
                this.itemsInStage[i] = null;
            }
        }
        this.itemsInStage = [];
    };
    GameScene.prototype.gameOverStop = function () {
        console.log("this.gameover");
        this.boss_mc.stop();
        this.player_mc.stop();
        //结束时去掉
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.countTime, this);
    };
    //触摸点击事件
    GameScene.prototype.onTouchMove = function (evt) {
        //evt.stageX鼠标点击的位置
        if (evt.stageX > this.player_mc.x) {
            this.player_mc.scaleX = 1;
            this.targetX = 640;
            // egret.Tween.get(this.player_mc).to({ x: evt.stageX - this.player_mc.width / 2 }, Math.abs(evt.stageX - this.player_mc.x) / this.player_mc.speed);
        }
        else {
            this.player_mc.scaleX = -1; //玩家反轉
            this.targetX = 0;
            // egret.Tween.get(this.player_mc).to({ x: evt.stageX + this.player_mc.width / 2 }, Math.abs(evt.stageX - this.player_mc.x) / this.player_mc.speed);
        }
    };
    //触摸暂停时事件
    GameScene.prototype.onTouchStop = function (evt) {
        egret.Tween.pauseTweens(evt.target);
    };
    GameScene.prototype.removeItem = function (item) {
        var index = this.itemsInStage.indexOf(item);
        if (index !== -1) {
            this.itemsInStage.splice(index, 1);
        }
    };
    return GameScene;
}(egret.Sprite));
__reflect(GameScene.prototype, "GameScene");
