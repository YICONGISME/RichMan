// 开始游戏之前场景
class StartScene extends egret.Sprite {

    private startScene: egret.Sprite;
    private start_bg: egret.Bitmap;
    private startGameText: egret.TextField;
    private sceneManager: SceneManager;
    private coin_mc;
    private shoe_shaped_mc;
    private chest_mc;
    private bomb_mc;

    constructor() {
        super();
        this.init();
    }

    public init() {
        //使用单例模式，无需再实例化，否则会有多个控制器实例，造成混乱
        // this.sceneManager = new SceneManager();

        //开始游戏背景
        this.start_bg = new egret.Bitmap();
        this.start_bg.texture = RES.getRes("bg_png");
        // this.start_bg.fillMode = egret.BitmapFillMode.CLIP;
        this.start_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.start_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.start_bg);

        //开始游戏文本
        this.startGameText = new egret.TextField();
        this.align_center(this.startGameText, 500, "center");
        this.startGameText.y = egret.MainContext.instance.stage.stageHeight - 200;
        this.startGameText.width = 500;
        this.startGameText.size = 70;
        this.startGameText.fontFamily = Font.KAITI;
        this.startGameText.textColor = Colors.GOLD;
        this.startGameText.bold = true;
        this.startGameText.text = Language.START_GAME_TEXT;
        this.addChild(this.startGameText);
        this.startGameText.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);


        this.coin_mc = new Jewels(JewelsType.COIN);
        this.coin_mc.x = 100;
        this.coin_mc.y = 100;
        this.addChild(this.coin_mc);

        this.shoe_shaped_mc = new Jewels(JewelsType.SHOE_SHAPED);
        this.shoe_shaped_mc.x = 300;
        this.shoe_shaped_mc.y = 200;
        this.addChild(this.shoe_shaped_mc);

        this.chest_mc = new Jewels(JewelsType.CHEST);
        this.chest_mc.x = 400;
        this.chest_mc.y = 200;
        this.addChild(this.chest_mc);

        this.bomb_mc = new Jewels(JewelsType.BOMB);
        this.bomb_mc.x = 200;
        this.bomb_mc.y = 400;
        this.addChild(this.bomb_mc);

    }
    //文本居中函数
    private align_center(item, width, align) {
        item.width = width;
        if (align == "center") {
            item.x = egret.MainContext.instance.stage.stageWidth / 2 - item.width / 2;
        } else if (align == "left") {
            item.x = egret.MainContext.instance.stage.stageWidth / 4 - item.width / 2;
        } else {
            item.x = egret.MainContext.instance.stage.stageWidth * 3 / 4 - item.width / 2;

        }
        item.textAlign = "" + align + "";
    }
    //开始游戏侦听函数，通过场景管理器跳转游戏场景
    private startGame(evt: egret.Event) {

        SceneManager.getInstance().toGameScene();
    }


}

