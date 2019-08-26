var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 格子类
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(row, col, color) {
        if (color === void 0) { color = 0xffffff; }
        var _this = _super.call(this) || this;
        _this._isDifferent = false;
        _this._row = row;
        _this._col = col;
        _this._color = color;
        _this.initView();
        return _this;
    }
    Grid.prototype.initView = function () {
        this.view = new egret.Shape();
        this.addChild(this.view);
        this.updateView();
    };
    Grid.prototype.updateView = function () {
        this.view.graphics.clear();
        this.view.graphics.beginFill(this._color);
        this.view.graphics.drawRect(this.col * 120, this.row * 120, 100, 100);
        this.view.graphics.endFill();
    };
    Object.defineProperty(Grid.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (value) {
            this._row = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "col", {
        get: function () {
            return this._col;
        },
        set: function (value) {
            this._col = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    return Grid;
}(egret.Sprite));
__reflect(Grid.prototype, "Grid");
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.level = 1;
        _this.grids = [];
        _this.squareWidth = 0;
        _this.timeOnStart = 0;
        _this.timeOnStart2 = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.init();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * 只创建或加载一次
     * Create a game scene
     */
    /*Main.prototype.createGameScene = function(){

    }*/
    Main.prototype.init = function () {
        this.record_level = egret.localStorage.getItem('record_level');
        console.log(this.record_level);
        if (this.record_level === null) {
            this.record_level = 0;
        }
        else {
        }
        //游戏开始前的状态
        this.status = Status.BEFORE_GAME;
        //游戏进行时的背景
        this.game_bg = new egret.Bitmap();
        var texture2 = RES.getRes("game_bg_png"); //获取图片绘制位图的纹理
        this.game_bg.texture = texture2;
        this.game_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.game_bg);
        //创建存放格子的容器
        this.container = new egret.Sprite();
        this.container.x = 5;
        this.container.y = egret.MainContext.instance.stage.stageHeight / 2 - egret.MainContext.instance.stage.stageWidth / 2 - 5;
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
        this.countDown.x = egret.MainContext.instance.stage.stageWidth - 150;
        this.countDown.y = this.container.y - 35;
        this.countDown.textAlign = "center";
        this.countDown.fontFamily = Font.MICRO_YAHEI;
        this.countDown.size = 30;
        this.countDown.textColor = 0xEE2C2C;
        this.countDown.strokeColor = 0xEE9A00;
        this.addChild(this.countDown);
        this.videoCountDown = new egret.TextField();
        this.videoCountDown.y = egret.MainContext.instance.stage.stageHeight - 100;
        this.align_center(this.videoCountDown, 500, "center");
        this.videoCountDown.fontFamily = Font.MICRO_YAHEI;
        this.videoCountDown.size = 30;
        this.videoCountDown.textColor = 0x000000;
        this.videoCountDown.strokeColor = 0xEE9A00;
        //把开始界面添加在最上层，隐藏底下的游戏界面
        //游戏开始的背景图片
        this.bg = new egret.Bitmap();
        var texture = RES.getRes("backgroud_png"); //获取图片绘制位图的纹理
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
        this.align_center(this.revive, 100, "right");
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
    };
    //文本居中函数
    Main.prototype.align_center = function (item, width, align) {
        item.width = width;
        if (align == "center") {
            item.x = egret.MainContext.instance.stage.stageWidth / 2 - item.width / 2;
        }
        else if (align == "left") {
            item.x = egret.MainContext.instance.stage.stageWidth / 4 - item.width / 2;
        }
        else {
            item.x = egret.MainContext.instance.stage.stageWidth * 3 / 4 - item.width / 2;
        }
        item.textAlign = "" + align + "";
    };
    Main.prototype.startGame = function () {
        this.selectSound = RES.getRes(Sound.SELECT_SOUND);
        this.selectSound.play(0, 1);
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
        this.squareWidth = egret.MainContext.instance.stage.stageWidth - 10;
        console.log(egret.MainContext.instance.stage.stageHeight);
        //难度梯度
        var hard = Math.floor(Math.log(100 - this.level));
        if (hard < 1) {
            hard = 1;
        }
        //颜色的随机索引
        var randomNum = Math.floor(Math.random() * Colors.colors.length - hard);
        //两个随机颜色
        var color1 = Colors.colors[randomNum];
        var color2 = Colors.colors[randomNum + hard];
        //颜色不同格子的随机位置
        var randomRow = Math.floor(Math.random() * (this.level + 1));
        var randomCol = Math.floor(Math.random() * (this.level + 1));
        console.log(randomRow, randomCol);
        //生成格子
        for (var col = 0; col < this.level + 1; col++) {
            this.grids.push([]);
            for (var row = 0; row < this.level + 1; row++) {
                //如果是不同格子的位置则把他颜色设置为不同的
                if (row == randomRow && col == randomCol) {
                    var grid = new Grid(row, col, color2);
                    //设置标志为不同的
                    grid._isDifferent = true;
                    this.grids[col].push(grid);
                }
                else {
                    var grid = new Grid(row, col, color1);
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
    };
    Main.prototype.onTimePass = function (e) {
        //设置只有游戏进行中才计时
        if (this.status == Status.START_GAME) {
            var now = egret.getTimer(); //获取现在的时间
            var time = this.timeOnStart; //获取开始游戏的时间
            var pass = now - time; //计算经过的时间
            console.log(5 - Math.floor(pass / 1000));
            this.count = 8 - Math.floor(pass / 1000); //获取倒计时
            if (this.count < 0) {
                this.count = 0;
            }
            // console.log("onEnterFrame: ", (pass).toFixed(5));
            //设置倒计时文本
            this.countDown.text = Language.COUNT_DOWN_TEXT + this.count + "秒";
        }
        else if (this.status == Status.REVIVE_GAME) {
            var now2 = egret.getTimer(); //获取现在的时间
            var time2 = this.timeOnStart2; //获取开始游戏的时间
            var pass2 = now2 - time2; //计算经过的时间
            // console.log(5 - Math.floor(pass2 / 1000));
            this.videoCount = 5 - Math.floor(pass2 / 1000); //获取倒计时
            if (this.videoCount < 0) {
                this.videoCount = 0;
            }
            // console.log("onEnterFrame: ", (pass).toFixed(5));
            //设置倒计时文本
            this.videoCountDown.text = "复活广告" + Language.COUNT_DOWN_TEXT + this.videoCount + "秒";
        }
    };
    //点击事件
    Main.prototype.onGridTouched = function (e) {
        console.log(e.target);
        var grid = e.target;
        //如果点击的格子是标志为不同的，则重置时间，关卡增加并更新界面
        if (grid._isDifferent === true) {
            this.clickSound = RES.getRes(Sound.CLICK_SOUND);
            this.clickSound.play(0, 1);
            // next level\
            this.time.reset();
            console.log("next level");
            // if (this.level < 8) {
            this.level++;
            // }
            this.update();
        }
        else {
            // game over
            //时间停止，游戏结束
            this.time.stop();
            console.log("game over");
            this.gameOver();
        }
    };
    Main.prototype.gameOver = function () {
        this.overSound = RES.getRes(Sound.OVER_SOUND);
        this.overSound.play(0, 1);
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
        var texture = RES.getRes("game_bg_png"); //获取图片绘制位图的纹理
        this.game_over.texture = texture;
        this.game_over.alpha = 0.8;
        this.failed_container.addChild(this.game_over);
        //闯关失败文本
        this.game_failed.text = Language.GAME_OVER_TEXT;
        this.failed_container.addChild(this.game_failed);
        //历史最高纪录
        // console.log(this.failed_container.width);
        this.max_record.text = Language.RECORD_MAX_LEVEL_TEXT + this.record_level + Language.LEVEL_TEXT;
        this.failed_container.addChild(this.max_record);
        //当前关卡为
        this.curr_level.text = Language.CURR_LEVEL_TEXT + this.level + Language.LEVEL_TEXT;
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
    };
    //重试事件
    Main.prototype.onRetryTouched = function (evt) {
        this.retrySound = RES.getRes(Sound.SELECT_SOUND);
        this.retrySound.play(0, 1);
        var retryTouch = evt.target;
        console.log("retry");
        //如果存在失败界面则移除
        if (this.failed_container.parent.contains(this.failed_container)) {
            this.failed_container.parent.removeChild(this.failed_container);
        }
        //重新开始游戏
        // this.level=1;
        this.startGame();
    };
    //复活广告
    Main.prototype.reviveVideo = function (evt) {
        this.reviveSound = RES.getRes(Sound.SELECT_SOUND);
        this.reviveSound.play(0, 1);
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
    };
    Main.prototype.removeVideo = function () {
        console.log('removevideo');
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
    };
    //下一关更新
    Main.prototype.update = function () {
        // this.grids=[];
        //下一关时时间重新开始，并获取时间
        this.time.start();
        this.timeOnStart = egret.getTimer();
        //更新关卡文本
        this.is_level.text = "第" + this.level + "关";
        //使指数不能小于2，为负数会出错
        var hard = Math.floor(Math.log((10 - this.level) > 2 ? 10 - this.level : 2) / Math.log(2));
        console.log(hard);
        var randomNum = Math.floor(Math.random() * Colors.colors.length - hard);
        var color1 = Colors.colors[randomNum];
        var color2 = Colors.colors[randomNum + hard];
        var new_level = this.level + 1 > 8 ? 8 : this.level + 1;
        var randomRow = Math.floor(Math.random() * (new_level - 1));
        var randomCol = Math.floor(Math.random() * (new_level - 1));
        console.log(randomRow, randomCol);
        for (var col = 0; col < new_level; col++) {
            //关卡增加后，格子数组还未增加，因此遍历前先增加
            if (col >= this.grids.length) {
                this.grids.push([]);
            }
            for (var row = 0; row < new_level; row++) {
                if (row >= this.grids[col].length) {
                    var grid = new Grid(row, col);
                    grid.touchEnabled = true;
                    this.container.addChild(grid);
                    grid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridTouched, this);
                    this.grids[col].push(grid);
                }
                if (row == randomRow && col == randomCol) {
                    this.grids[col][row].color = color1;
                    this.grids[col][row]._isDifferent = true;
                }
                else {
                    this.grids[col][row].color = color2;
                    this.grids[col][row]._isDifferent = false;
                }
            }
        }
        this.setContainerSize();
    };
    Main.prototype.setContainerSize = function () {
        //缩放格子的大小自适应容器
        this.container.scaleX = this.squareWidth / this.container.width;
        this.container.scaleY = this.squareWidth / this.container.height;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//颜色枚举
var Colors;
(function (Colors) {
    // export const BLACK: number = 0x000000;
    Colors.DIMGRAY = 0x696969;
    Colors.GRAY = 0x808080;
    Colors.DARKGRAY = 0xA9A9A9;
    Colors.SILVER = 0xC0C0C0;
    Colors.LIGHTGREY = 0xD3D3D3;
    Colors.GAINSBORO = 0xDCDCDC;
    Colors.WHITESMOKE = 0xF5F5F5;
    Colors.WHITE = 0xFFFFFF;
    Colors.SNOW = 0xFFFAFA;
    Colors.GHOSTWHITE = 0xF8F8FF;
    Colors.FLORALWHITE = 0xFFFAF0;
    Colors.LINEN = 0xFAF0E6;
    Colors.ANTIQUEWHITE = 0xFAEBD7;
    Colors.PAPAYAWHIP = 0xFFEFD5;
    Colors.BLANCHEDALMOND = 0xFFEBCD;
    Colors.BISQUE = 0xFFE4C4;
    Colors.MOCCASIN = 0xFFE4B5;
    Colors.NAVAJOWHITE = 0xFFDEAD;
    Colors.PEACHPUFF = 0xFFDAB9;
    Colors.MISTYROSE = 0xFFE4E1;
    Colors.LAVENDERBLUSH = 0xFFF0F5;
    Colors.SEASHELL = 0xFFF5EE;
    Colors.OLDLACE = 0xFDF5E6;
    Colors.IVORY = 0xFFFFF0;
    Colors.HONEYDEW = 0xF0FFF0;
    Colors.MINTCREAM = 0xF5FFFA;
    Colors.AZURE = 0xF0FFFF;
    Colors.ALICEBLUE = 0xF0F8FF;
    Colors.LAVENDER = 0xE6E6FA;
    Colors.LIGHTSTEELBLUE = 0xB0C4DE;
    Colors.LIGHTSLATEGRAY = 0x778899;
    Colors.SLATEGRAY = 0x708090;
    Colors.STEELBLUE = 0x4682B4;
    Colors.ROYALBLUE = 0x4169E1;
    Colors.MIDNIGHTBLUE = 0x191970;
    Colors.NAVY = 0x000080;
    Colors.DARKBLUE = 0x00008B;
    Colors.MEDIUMBLUE = 0x0000CD;
    Colors.BLUE = 0x0000FF;
    Colors.DODGERBLUE = 0x1E90FF;
    Colors.CORNFLOWERBLUE = 0x6495ED;
    Colors.DEEPSKYBLUE = 0x00BFFF;
    Colors.LIGHTSKYBLUE = 0x87CEFA;
    Colors.SKYBLUE = 0x87CEEB;
    Colors.LIGHTBLUE = 0xADD8E6;
    Colors.POWDERBLUE = 0xB0E0E6;
    Colors.PALETURQUOISE = 0xAFEEEE;
    Colors.LIGHTCYAN = 0xE0FFFF;
    Colors.CYAN = 0x00FFFF;
    Colors.AQUA = 0x00FFFF;
    Colors.TURQUOISE = 0x40E0D0;
    Colors.MEDIUMTURQUOISE = 0x48D1CC;
    Colors.DARKTURQUOISE = 0x00CED1;
    Colors.LIGHTSEAGREEN = 0x20B2AA;
    Colors.CADETBLUE = 0x5F9EA0;
    Colors.DARKCYAN = 0x008B8B;
    Colors.TEAL = 0x008080;
    Colors.DARKSLATEGRAY = 0x2F4F4F;
    Colors.DARKGREEN = 0x006400;
    Colors.GREEN = 0x008000;
    Colors.FORESTGREEN = 0x228B22;
    Colors.SEAGREEN = 0x2E8B57;
    Colors.MEDIUMSEAGREEN = 0x3CB371;
    Colors.MEDIUMAQUAMARINE = 0x66CDAA;
    Colors.DARKSEAGREEN = 0x8FBC8F;
    Colors.AQUAMARINE = 0x7FFFD4;
    Colors.PALEGREEN = 0x98FB98;
    Colors.LIGHTGREEN = 0x90EE90;
    Colors.SPRINGGREEN = 0x00FF7F;
    Colors.MEDIUMSPRINGGREEN = 0x00FA9A;
    Colors.LAWNGREEN = 0x7CFC00;
    Colors.CHARTREUSE = 0x7FFF00;
    Colors.GREENYELLOW = 0xADFF2F;
    Colors.LIME = 0x00FF00;
    Colors.LIMEGREEN = 0x32CD32;
    Colors.YELLOWGREEN = 0x9ACD32;
    Colors.DARKOLIVEGREEN = 0x556B2F;
    Colors.OLIVEDRAB = 0x6B8E23;
    Colors.OLIVE = 0x808000;
    Colors.DARKKHAKI = 0xBDB76B;
    Colors.PALEGOLDENROD = 0xEEE8AA;
    Colors.CORNSILK = 0xFFF8DC;
    Colors.BEIGE = 0xF5F5DC;
    Colors.LIGHTYELLOW = 0xFFFFE0;
    Colors.LIGHTGOLDENRODYELLOW = 0xFAFAD2;
    Colors.LEMONCHIFFON = 0xFFFACD;
    Colors.WHEAT = 0xF5DEB3;
    Colors.BURLYWOOD = 0xDEB887;
    Colors.TAN = 0xD2B48C;
    Colors.KHAKI = 0xF0E68C;
    Colors.YELLOW = 0xFFFF00;
    Colors.GOLD = 0xFFD700;
    Colors.ORANGE = 0xFFA500;
    Colors.SANDYBROWN = 0xF4A460;
    Colors.DARKORANGE = 0xFF8C00;
    Colors.GOLDENROD = 0xDAA520;
    Colors.PERU = 0xCD853F;
    Colors.DARKGOLDENROD = 0xB8860B;
    Colors.CHOCOLATE = 0xD2691E;
    Colors.SIENNA = 0xA0522D;
    Colors.SADDLEBROWN = 0x8B4513;
    Colors.MAROON = 0x800000;
    Colors.DARKRED = 0x8B0000;
    Colors.BROWN = 0xA52A2A;
    Colors.FIREBRICK = 0xB22222;
    Colors.INDIANRED = 0xCD5C5C;
    Colors.ROSYBROWN = 0xBC8F8F;
    Colors.DARKSALMON = 0xE9967A;
    Colors.LIGHTCORAL = 0xF08080;
    Colors.SALMON = 0xFA8072;
    Colors.LIGHTSALMON = 0xFFA07A;
    Colors.CORAL = 0xFF7F50;
    Colors.TOMATO = 0xFF6347;
    Colors.ORANGERED = 0xFF4500;
    Colors.RED = 0xFF0000;
    Colors.CRIMSON = 0xDC143C;
    Colors.MEDIUMVIOLETRED = 0xC71585;
    Colors.DEEPPINK = 0xFF1493;
    Colors.HOTPINK = 0xFF69B4;
    Colors.PALEVIOLETRED = 0xDB7093;
    Colors.PINK = 0xFFC0CB;
    Colors.LIGHTPINK = 0xFFB6C1;
    Colors.THISTLE = 0xD8BFD8;
    Colors.MAGENTA = 0xFF00FF;
    Colors.FUCHSIA = 0xFF00FF;
    Colors.VIOLET = 0xEE82EE;
    Colors.PLUM = 0xDDA0DD;
    Colors.ORCHID = 0xDA70D6;
    Colors.MEDIUMORCHID = 0xBA55D3;
    Colors.DARKORCHID = 0x9932CC;
    Colors.DARKVIOLET = 0x9400D3;
    Colors.DARKMAGENTA = 0x8B008B;
    Colors.PURPLE = 0x800080;
    Colors.INDIGO = 0x4B0082;
    Colors.DARKSLATEBLUE = 0x483D8B;
    Colors.BLUEVIOLET = 0x8A2BE2;
    Colors.MEDIUMPURPLE = 0x9370DB;
    Colors.SLATEBLUE = 0x6A5ACD;
    Colors.MEDIUMSLATEBLUE = 0x7B68EE;
    Colors.colors = [
        // BLACK,
        Colors.DIMGRAY,
        Colors.GRAY,
        Colors.DARKGRAY,
        Colors.SILVER,
        Colors.LIGHTGREY,
        Colors.GAINSBORO,
        Colors.WHITESMOKE,
        Colors.WHITE,
        Colors.SNOW,
        Colors.GHOSTWHITE,
        Colors.FLORALWHITE,
        Colors.LINEN,
        Colors.ANTIQUEWHITE,
        Colors.PAPAYAWHIP,
        Colors.BLANCHEDALMOND,
        Colors.BISQUE,
        Colors.MOCCASIN,
        Colors.NAVAJOWHITE,
        Colors.PEACHPUFF,
        Colors.MISTYROSE,
        Colors.LAVENDERBLUSH,
        Colors.SEASHELL,
        Colors.OLDLACE,
        Colors.IVORY,
        Colors.HONEYDEW,
        Colors.MINTCREAM,
        Colors.AZURE,
        Colors.ALICEBLUE,
        Colors.LAVENDER,
        Colors.LIGHTSTEELBLUE,
        Colors.LIGHTSLATEGRAY,
        Colors.SLATEGRAY,
        Colors.STEELBLUE,
        Colors.ROYALBLUE,
        Colors.MIDNIGHTBLUE,
        Colors.NAVY,
        Colors.DARKBLUE,
        Colors.MEDIUMBLUE,
        Colors.BLUE,
        Colors.DODGERBLUE,
        Colors.CORNFLOWERBLUE,
        Colors.DEEPSKYBLUE,
        Colors.LIGHTSKYBLUE,
        Colors.SKYBLUE,
        Colors.LIGHTBLUE,
        Colors.POWDERBLUE,
        Colors.PALETURQUOISE,
        Colors.LIGHTCYAN,
        Colors.CYAN,
        Colors.AQUA,
        Colors.TURQUOISE,
        Colors.MEDIUMTURQUOISE,
        Colors.DARKTURQUOISE,
        Colors.LIGHTSEAGREEN,
        Colors.CADETBLUE,
        Colors.DARKCYAN,
        Colors.TEAL,
        Colors.DARKSLATEGRAY,
        Colors.DARKGREEN,
        Colors.GREEN,
        Colors.FORESTGREEN,
        Colors.SEAGREEN,
        Colors.MEDIUMSEAGREEN,
        Colors.MEDIUMAQUAMARINE,
        Colors.DARKSEAGREEN,
        Colors.AQUAMARINE,
        Colors.PALEGREEN,
        Colors.LIGHTGREEN,
        Colors.SPRINGGREEN,
        Colors.MEDIUMSPRINGGREEN,
        Colors.LAWNGREEN,
        Colors.CHARTREUSE,
        Colors.GREENYELLOW,
        Colors.LIME,
        Colors.LIMEGREEN,
        Colors.YELLOWGREEN,
        Colors.DARKOLIVEGREEN,
        Colors.OLIVEDRAB,
        Colors.OLIVE,
        Colors.DARKKHAKI,
        Colors.PALEGOLDENROD,
        Colors.CORNSILK,
        Colors.BEIGE,
        Colors.LIGHTYELLOW,
        Colors.LIGHTGOLDENRODYELLOW,
        Colors.LEMONCHIFFON,
        Colors.WHEAT,
        Colors.BURLYWOOD,
        Colors.TAN,
        Colors.KHAKI,
        Colors.YELLOW,
        Colors.GOLD,
        Colors.ORANGE,
        Colors.SANDYBROWN,
        Colors.DARKORANGE,
        Colors.GOLDENROD,
        Colors.PERU,
        Colors.DARKGOLDENROD,
        Colors.CHOCOLATE,
        Colors.SIENNA,
        Colors.SADDLEBROWN,
        Colors.MAROON,
        Colors.DARKRED,
        Colors.BROWN,
        Colors.FIREBRICK,
        Colors.INDIANRED,
        Colors.ROSYBROWN,
        Colors.DARKSALMON,
        Colors.LIGHTCORAL,
        Colors.SALMON,
        Colors.LIGHTSALMON,
        Colors.CORAL,
        Colors.TOMATO,
        Colors.ORANGERED,
        Colors.RED,
        Colors.CRIMSON,
        Colors.MEDIUMVIOLETRED,
        Colors.DEEPPINK,
        Colors.HOTPINK,
        Colors.PALEVIOLETRED,
        Colors.PINK,
        Colors.LIGHTPINK,
        Colors.THISTLE,
        Colors.MAGENTA,
        Colors.FUCHSIA,
        Colors.VIOLET,
        Colors.PLUM,
        Colors.ORCHID,
        Colors.MEDIUMORCHID,
        Colors.DARKORCHID,
        Colors.DARKVIOLET,
        Colors.DARKMAGENTA,
        Colors.PURPLE,
        Colors.INDIGO,
        Colors.DARKSLATEBLUE,
        Colors.BLUEVIOLET,
        Colors.MEDIUMPURPLE,
        Colors.SLATEBLUE,
        Colors.MEDIUMSLATEBLUE
    ];
})(Colors || (Colors = {}));
//字体枚举
var Font;
(function (Font) {
    Font.MICRO_YAHEI = "微软雅黑";
})(Font || (Font = {}));
var GameManager;
(function (GameManager) {
    GameManager.level = 1;
})(GameManager || (GameManager = {}));
// 文本枚举
var Language;
(function (Language) {
    Language.START_GAME_TEXT = "开始游戏";
    Language.GAME_OVER_TEXT = "闯关失败";
    Language.RETRY_GAME_TEXT = "重试";
    Language.REVIVE_GAME_TEXT = "复活";
    Language.COUNT_DOWN_TEXT = "倒计时";
    Language.RECORD_MAX_LEVEL_TEXT = "历史最高记录为第";
    Language.CURR_LEVEL_TEXT = "当前关卡为";
    Language.LEVEL_TEXT = "关卡";
})(Language || (Language = {}));
// 声音枚举
var Sound;
(function (Sound) {
    Sound.MAIN_SOUND = "MainSound_mp3";
    Sound.CLICK_SOUND = "ClickSound_mp3";
    Sound.SELECT_SOUND = "SelectSound_mp3";
    Sound.OVER_SOUND = "OverSound_mp3";
})(Sound || (Sound = {}));
// 游戏状态枚举
var Status;
(function (Status) {
    Status.BEFORE_GAME = 1;
    Status.START_GAME = 2;
    Status.GAME_OVER = 3;
    Status.REVIVE_GAME = 4;
})(Status || (Status = {}));

;window.Main = Main;