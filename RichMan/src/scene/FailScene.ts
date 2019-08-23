class FailScene extends egret.Sprite {
    private game_failed;
    private failed_bg;
    private retry;

    constructor() {
        super();

        this.init();
    }

    private init() {

        this.failed_bg = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes("failed_bg_png");//获取图片绘制位图的纹理
        this.failed_bg.texture = texture;
        this.failed_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.failed_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.failed_bg);


        this.game_failed = new egret.TextField();
        this.game_failed.y = 250;
        Common.getInstance().align_center(this.game_failed, 500, "center");
        this.game_failed.fontFamily = Font.MICRO_YAHEI;
        this.game_failed.size = 90;
        this.game_failed.textColor = 0xEE2C2C;
        this.game_failed.strokeColor = 0xEE9A00;
        this.game_failed.bold = true;
        this.game_failed.text = "你接到炸弹啦！";
        this.addChild(this.game_failed);


        //重试文本
        this.retry = new egret.TextField();
        this.retry.y = 700;
        Common.getInstance().align_center(this.retry, 100, "left");
        this.retry.fontFamily = Font.MICRO_YAHEI;
        this.retry.size = 50;
        this.retry.textColor = 0xEE9A00;
        this.retry.strokeColor = 0xEE9A00;
        this.retry.bold = true;
        this.retry.touchEnabled = true;
        this.retry.text = "重试";
        this.addChild(this.retry);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    private onTouchTap() {
        GameController.getInstance().gameRestart();
    }


}
