//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.init();

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private level = 1;

    private grids = [];

    private container: egret.Sprite;
    private failed_container: egret.Sprite;

    private squareWidth = 0;
    private start_game: egret.TextField;
    private bg: egret.Bitmap;
    private game_bg: egret.Bitmap;
    private game_over: egret.Bitmap;
    private is_level: egret.TextField;
    private game_failed: egret.TextField;
    private retry: egret.TextField;
    private revive: egret.TextField;
    private time: egret.Timer;
    private time2: egret.Timer;

    private timeOnStart: number = 0;
    private timeOnStart2: number = 0;

    private countDown: egret.TextField;
    private status: number;
    private record_level;
    private max_record: egret.TextField;
    private curr_level: egret.TextField;
    private count;
    private videoCount;
    private videoCountDown;
    
    private mainSound:egret.Sound;
    private clickSound:egret.Sound;
    private selectSound:egret.Sound;
    private retrySound:egret.Sound;
    private reviveSound:egret.Sound;
    private overSound:egret.Sound;

    /**
     * 创建游戏场景
     * 只创建或加载一次
     * Create a game scene
     */

    /*Main.prototype.createGameScene = function(){

    }*/
    private init() {
        this.record_level = egret.localStorage.getItem('record_level');
        console.log(this.record_level);
        if (this.record_level === null) {
            this.record_level = 0;
        } else {

        }
        //游戏开始前的状态
        this.status = Status.BEFORE_GAME;

        //游戏进行时的背景
        this.game_bg = new egret.Bitmap();
        let texture2: egret.Texture = RES.getRes("game_bg_png");//获取图片绘制位图的纹理
        this.game_bg.texture = texture2;
        this.game_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.game_bg);

        //创建存放格子的容器
        this.container = new egret.Sprite();
        this.container.x = 5
        this.container.y =egret.MainContext.instance.stage.stageHeight / 2 - egret.MainContext.instance.stage.stageWidth  / 2 - 5;
        this.addChild(this.container);

        //第几关
        this.is_level = new egret.TextField();
        this.is_level.width = 480;

        this.is_level.x = egret.MainContext.instance.stage.stageWidth / 2 - this.is_level.width / 2;
        this.is_level.y = this.container.y - 70;
        // this.is_level.height = 100;
        this.is_level.textAlign = "center";
        this.is_level.fontFamily = Font.MICRO_YAHEI;
        this.is_level.size = 70;
        this.is_level.textColor = 0x5F9EA0;
        this.is_level.strokeColor = 0xEE9A00;
        this.is_level.bold = true;

        //倒计时
        this.countDown = new egret.TextField();
        this.countDown.x = egret.MainContext.instance.stage.stageWidth  - 150;
        this.countDown.y = this.container.y - 35;
        this.countDown.textAlign = "center";
        this.countDown.fontFamily = Font.MICRO_YAHEI;
        this.countDown.size = 30;
        this.countDown.textColor = 0xEE2C2C;
        this.countDown.strokeColor = 0xEE9A00;
        this.addChild(this.countDown);

        this.videoCountDown = new egret.TextField();
        this.videoCountDown.y = egret.MainContext.instance.stage.stageHeight- 100;
        this.align_center(this.videoCountDown, 500, "center");
        this.videoCountDown.fontFamily = Font.MICRO_YAHEI;
        this.videoCountDown.size = 30;
        this.videoCountDown.textColor = 0x000000;
        this.videoCountDown.strokeColor = 0xEE9A00;

        //把开始界面添加在最上层，隐藏底下的游戏界面

        //游戏开始的背景图片
        this.bg = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes("backgroud_png");//获取图片绘制位图的纹理
        this.bg.texture = texture;
        this.bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.bg);

        //开始游戏按钮
        this.start_game = new egret.TextField();
        this.align_center(this.start_game, 500, "center");
        this.start_game.y = egret.MainContext.instance.stage.stageHeight - 300;
        this.start_game.fontFamily = Font.MICRO_YAHEI;
        this.start_game.size = 70;
        this.start_game.textColor = 0xEEAD0E;
        this.start_game.strokeColor = 0xEE9A00;
        this.start_game.bold = true;
        this.start_game.text = Language.START_GAME_TEXT;
        this.addChild(this.start_game);
        this.start_game.touchEnabled = true;

        //点击开始游戏的事件
        this.start_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);

        //倒计时事件
        this.addEventListener(egret.Event.ENTER_FRAME, this.onTimePass, this);

        //闯关失败
        this.game_failed = new egret.TextField();
        this.game_failed.y = 250;
        this.align_center(this.game_failed, 500, "center");
        this.game_failed.fontFamily = Font.MICRO_YAHEI;
        this.game_failed.size = 90;
        this.game_failed.textColor = 0xEE2C2C;
        this.game_failed.strokeColor = 0xEE9A00;
        this.game_failed.bold = true;

        //历史最高纪录
        this.max_record = new egret.TextField();
        this.align_center(this.max_record, 500, "center");
        this.max_record.y = 450;
        this.max_record.fontFamily = Font.MICRO_YAHEI;
        this.max_record.size = 30;
        this.max_record.textColor = 0xEEAD0E;
        this.max_record.strokeColor = 0xEE9A00;
        this.max_record.bold = true;

        //当前关卡为
        this.curr_level = new egret.TextField();
        this.curr_level.y = 530;
        this.align_center(this.curr_level, 500, "center");
        this.curr_level.fontFamily = Font.MICRO_YAHEI;
        this.curr_level.size = 30;
        this.curr_level.textColor = 0xEEAD0E;
        this.curr_level.strokeColor = 0xEE9A00;
        this.curr_level.bold = true;

        //重试文本
        this.retry = new egret.TextField();
        this.retry.y = 700;
        this.align_center(this.retry, 100, "left");
        this.retry.fontFamily = Font.MICRO_YAHEI;
        this.retry.size = 50;
        this.retry.textColor = 0xEE9A00;
        this.retry.strokeColor = 0xEE9A00;
        this.retry.bold = true;
        this.retry.touchEnabled = true;

        //复活
        this.revive = new egret.TextField();
        this.revive.y = 700;
        this.align_center(this.revive, 100, "right")
        this.revive.fontFamily = Font.MICRO_YAHEI;
        this.revive.size = 50;
        this.revive.textColor = 0xEE9A00;
        this.revive.strokeColor = 0xEE9A00;
        this.revive.bold = true;
        this.revive.touchEnabled = true;

        //实例化失败容器
        this.failed_container = new egret.Sprite();

        //实例化声音
        this.mainSound = new egret.Sound();
        this.mainSound = RES.getRes(Sound.MAIN_SOUND);
        this.mainSound.play();

        this.selectSound = new egret.Sound();
        this.clickSound = new egret.Sound();
        this.retrySound = new egret.Sound();
        this.reviveSound = new egret.Sound();
        this.overSound = new egret.Sound();


    }
    //文本居中函数
    private align_center(item, width, align) {
        item.width = width;
        if (align == "center") {
            item.x = egret.MainContext.instance.stage.stageWidth  / 2 - item.width / 2;
        } else if (align == "left") {
            item.x = egret.MainContext.instance.stage.stageWidth  / 4 - item.width / 2;
        } else {
            item.x = egret.MainContext.instance.stage.stageWidth * 3 / 4 - item.width / 2;

        }
        item.textAlign = "" + align + "";
    }

    private startGame() {
        this.selectSound = RES.getRes(Sound.SELECT_SOUND);
        this.selectSound.play(0,1);
        //设置开始游戏的状态为2
        this.status = Status.START_GAME;

        //开始游戏时移除开始界面层
        if (this.contains(this.bg)) {
            this.removeChild(this.bg);
        }
        if (this.contains(this.start_game)) {
            this.removeChild(this.start_game);
        }

        //设置定时器
        this.time = new egret.Timer(8000, 1);
        this.time2 = new egret.Timer(5000, 1);

        //移除上一关的格子
        this.container.removeChildren();

        //把格子置空
        this.grids = [];

        //每次重试从第一关开始
        // if(this.retry_revive_status==1){
        this.level = 1;


        //第几关
        this.is_level.text = "第" + this.level + "关";
        this.addChild(this.is_level);

        //格子的宽度
        this.squareWidth =egret.MainContext.instance.stage.stageWidth - 10;
        console.log(egret.MainContext.instance.stage.stageHeight);

        //难度梯度
        let hard = Math.floor(Math.log(100 - this.level));
        if (hard < 1) {
            hard = 1;
        }

        //颜色的随机索引
        let randomNum = Math.floor(Math.random() * Colors.colors.length - hard);
        //两个随机颜色
        let color1 = Colors.colors[randomNum];
        let color2 = Colors.colors[randomNum + hard];

        //颜色不同格子的随机位置
        let randomRow = Math.floor(Math.random() * (this.level + 1));
        let randomCol = Math.floor(Math.random() * (this.level + 1));
        console.log(randomRow, randomCol);

        //生成格子
        for (let col = 0; col < this.level + 1; col++) {
            this.grids.push([]);
            for (let row = 0; row < this.level + 1; row++) {
                //如果是不同格子的位置则把他颜色设置为不同的
                if (row == randomRow && col == randomCol) {
                    var grid = new Grid(row, col, color2);
                    //设置标志为不同的
                    grid._isDifferent = true;
                    this.grids[col].push(grid);

                } else {
                    var grid = new Grid(row, col, color1)
                    this.grids[col].push(grid);
                }
                //把格子添加到容器中，以及格子的侦听事件
                grid.touchEnabled = true;
                this.container.addChild(grid);
                grid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridTouched, this);

                //设置时间监听器，时间为8秒，执行一次
                this.time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.gameOver, this);
                this.time.start();
                //获取启动时时间
                this.timeOnStart = egret.getTimer();

            }
        }
        console.log(this.grids);
        //根据容器固定的大小使用格子的大小
        this.setContainerSize();

        //开始游戏把容器及其孩子格子设置为可触摸的
        this.container.touchEnabled = true;
        this.container.touchChildren = true;
    }
    private onTimePass(e: egret.Event) {
        //设置只有游戏进行中才计时
        if (this.status == Status.START_GAME) {
            var now = egret.getTimer();//获取现在的时间
            var time = this.timeOnStart;//获取开始游戏的时间
            var pass = now - time;//计算经过的时间
            console.log(5-Math.floor(pass/1000));
            this.count = 8 - Math.floor(pass / 1000);//获取倒计时

            if (this.count < 0) {
                this.count = 0;
            }
            // console.log("onEnterFrame: ", (pass).toFixed(5));
            //设置倒计时文本
            this.countDown.text = Language.COUNT_DOWN_TEXT + this.count + "秒";

        }else if (this.status == Status.REVIVE_GAME) {
            var now2 = egret.getTimer();//获取现在的时间
            var time2 = this.timeOnStart2;//获取开始游戏的时间
            var pass2 = now2 - time2;//计算经过的时间
            // console.log(5 - Math.floor(pass2 / 1000));
            this.videoCount = 5 - Math.floor(pass2 / 1000);//获取倒计时

            if (this.videoCount < 0) {
                this.videoCount = 0;
            }
            // console.log("onEnterFrame: ", (pass).toFixed(5));
            //设置倒计时文本
            this.videoCountDown.text = "复活广告"+Language.COUNT_DOWN_TEXT + this.videoCount + "秒";
        }


    }
    //点击事件
    private onGridTouched(e: egret.TouchEvent) {
        console.log(e.target);
        let grid = e.target;
        //如果点击的格子是标志为不同的，则重置时间，关卡增加并更新界面
        if (grid._isDifferent === true) {
            this.clickSound = RES.getRes(Sound.CLICK_SOUND);
            this.clickSound.play(0,1);
            // next level\
            this.time.reset();
            console.log("next level")
            // if (this.level < 8) {
            this.level++;
            // }
            this.update();
        } else {
            // game over
            //时间停止，游戏结束
            this.time.stop();
            console.log("game over");
            this.gameOver();
        }
    }

    private gameOver() {
        this.overSound = RES.getRes(Sound.OVER_SOUND);
        this.overSound.play(0,1);
        //游戏结束的状态为3
        this.status = Status.GAME_OVER;

        if (this.record_level < this.level) {
            this.record_level = this.level;
            egret.localStorage.setItem('record_level', this.record_level);
        }

        //创建失败的容器
        // this.failed_container.x = 5;

        this.addChild(this.failed_container);

        //游戏加载时的背景图片
        this.game_over = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes("game_bg_png");//获取图片绘制位图的纹理
        this.game_over.texture = texture;
        this.game_over.alpha = 0.8;
        this.failed_container.addChild(this.game_over);

        //闯关失败文本
        this.game_failed.text = Language.GAME_OVER_TEXT;
        this.failed_container.addChild(this.game_failed);

        //历史最高纪录
        // console.log(this.failed_container.width);
        this.max_record.text = Language.RECORD_MAX_LEVEL_TEXT+ this.record_level + Language.LEVEL_TEXT;
        this.failed_container.addChild(this.max_record);
        //当前关卡为
        this.curr_level.text = Language.CURR_LEVEL_TEXT+ this.level + Language.LEVEL_TEXT;
        this.failed_container.addChild(this.curr_level);

        //重试文本
        this.retry.text = Language.RETRY_GAME_TEXT;
        this.failed_container.addChild(this.retry);
        this.retry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRetryTouched, this);

        //复活文本
        this.revive.text = Language.REVIVE_GAME_TEXT;
        this.failed_container.addChild(this.revive);
        this.revive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviveVideo, this);

        //当游戏失败后，容器及其格子不能再点击，
        this.container.touchEnabled = false;
        this.container.touchChildren = false;

    }
    //重试事件
    private onRetryTouched(evt: egret.TouchEvent) {

        this.retrySound = RES.getRes(Sound.SELECT_SOUND);
        this.retrySound.play(0,1);

        let retryTouch = evt.target;
        console.log("retry");
        //如果存在失败界面则移除
        if (this.failed_container.parent.contains(this.failed_container)) {
            this.failed_container.parent.removeChild(this.failed_container);
        }
        //重新开始游戏
        // this.level=1;
        this.startGame();


    }
    //复活广告
    private reviveVideo(evt: egret.TouchEvent) {
        this.reviveSound = RES.getRes(Sound.SELECT_SOUND);
        this.reviveSound.play(0,1);

        this.status = Status.REVIVE_GAME;
        //侦听时间倒计时
        this.failed_container.addEventListener(egret.Event.ENTER_FRAME, this.onTimePass, this);

        this.time2.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeVideo, this);
        this.time2.start();
        this.timeOnStart2 = egret.getTimer();

        // this.timeOnStart = egret.getTimer();
        //加上广告
        this.failed_container.addChild(this.bg);
        this.failed_container.addChild(this.videoCountDown);

    }

    private removeVideo() {
        console.log('removevideo')
        if (this.failed_container.contains(this.bg)) {
            this.failed_container.removeChild(this.bg);
        }
        if (this.failed_container.contains(this.videoCountDown)) {
            this.failed_container.removeChild(this.videoCountDown);
        }
        //游戏继续进行
        if (this.failed_container.parent.contains(this.failed_container)) {
            this.failed_container.parent.removeChild(this.failed_container);
        }
        //把在游戏结束中关掉的再打开
        this.status = Status.START_GAME;
        this.timeOnStart = egret.getTimer();

        this.container.touchEnabled = true;
        this.container.touchChildren = true;
       
        this.time.reset();
        this.time.start();
    }


    //下一关更新
    private update() {
        // this.grids=[];
        //下一关时时间重新开始，并获取时间
        this.time.start();
        this.timeOnStart = egret.getTimer();

        //更新关卡文本
        this.is_level.text = "第" + this.level + "关";
        //使指数不能小于2，为负数会出错
        let hard = Math.floor(Math.log((10 - this.level) > 2 ? 10 - this.level : 2) / Math.log(2));

        console.log(hard);

        let randomNum = Math.floor(Math.random() * Colors.colors.length - hard);

        let color1 = Colors.colors[randomNum];
        let color2 = Colors.colors[randomNum + hard];

        let new_level = this.level + 1 > 8 ? 8 : this.level + 1;

        let randomRow = Math.floor(Math.random() * (new_level - 1));
        let randomCol = Math.floor(Math.random() * (new_level - 1));
        console.log(randomRow, randomCol);

        for (let col = 0; col < new_level; col++) {
            //关卡增加后，格子数组还未增加，因此遍历前先增加
            if (col >= this.grids.length) {
                this.grids.push([]);
            }
            for (let row = 0; row < new_level; row++) {
                if (row >= this.grids[col].length) {
                    let grid = new Grid(row, col);
                    grid.touchEnabled = true;
                    this.container.addChild(grid);
                    grid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridTouched, this);
                    this.grids[col].push(grid);
                }
                if (row == randomRow && col == randomCol) {
                    this.grids[col][row].color = color1;
                    this.grids[col][row]._isDifferent = true;
                } else {
                    this.grids[col][row].color = color2;
                    this.grids[col][row]._isDifferent = false;
                }

            }
        }

        this.setContainerSize();
    }

    private setContainerSize() {
        //缩放格子的大小自适应容器
        this.container.scaleX = this.squareWidth / this.container.width;
        this.container.scaleY = this.squareWidth / this.container.height;
    }

    

}