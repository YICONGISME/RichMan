class GameEndScene extends egret.Sprite {
    private game_end:egret.TextField;
    private failed_bg:egret.Bitmap;
    private game_score:egret.TextField;
    private next_level:egret.TextField;
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


        this.game_end = new egret.TextField();
        this.game_end.y = 250;
        Common.align_center(this.game_end, 500, "center");
        this.game_end.fontFamily = Font.MICRO_YAHEI;
        this.game_end.size = 90;
        this.game_end.textColor = 0xEE2C2C;
        this.game_end.strokeColor = 0xEE9A00;
        this.game_end.bold = true;
        this.game_end.text = "游戏结束";
        this.addChild(this.game_end);

        //得分文本
        this.game_score = new egret.TextField();
        this.game_score.y = 400;
        Common.align_center(this.game_score, 500, "center");
        this.game_score.fontFamily = Font.MICRO_YAHEI;
        this.game_score.size = 50;
        this.game_score.textColor = Colors.LIGHTYELLOW;
        this.game_score.bold = true;
        this.addChild(this.game_score);

        //下一关
        this.next_level = new egret.TextField();
        this.next_level.y = 700;
        Common.align_center(this.next_level, 500, "center");
        this.next_level.fontFamily = Font.MICRO_YAHEI;
        this.next_level.size = 50;
        this.next_level.textColor = Colors.BLACK;
        this.next_level.bold = true;
        this.next_level.touchEnabled = true;
        this.next_level.text = "下一关";
        this.addChild(this.next_level);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    private onTouchTap() {
        GameController.getInstance().gameNextLevel();
    }

    public setEndScore(last_score){
        this.game_score.text = "您的得分为"+last_score;
    }
    
}
