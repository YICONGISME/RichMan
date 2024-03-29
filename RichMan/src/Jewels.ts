// 珠宝类

class Jewels extends egret.Sprite {
    private speed: number;
    private score: number;
    private type: number;
    private type_mc: egret.MovieClip;
    private coin_mc: egret.MovieClip;
    private shoe_shaped_mc: egret.MovieClip;
    private chest_mc: egret.MovieClip;
    private bomb_mc: egret.MovieClip;

    constructor(type) {
        super();
        //分值和速度根据类型确定
        this.speed = DataManager.getInstance().getSpeedByJewelsType(type);;
        this.score = DataManager.getInstance().getScoreByJewelsType(type);
        this.type = type;

        this.init();
    }
    private init() {

        if (this.type == JewelsType.COIN) {
            this.coin_mc = Common.buildTypeMc("coin_json", "coin_png", "coin");
            this.coin_mc.anchorOffsetX = this.coin_mc.width;
            this.coin_mc.anchorOffsetY = this.coin_mc.height;
            this.coin_mc.play(-1);
            // this.coin_tw = egret.Tween.get(this.coin_mc);
            // this.coin_tw.to({ rotation: 200 }, 2000);
            this.addChild(this.coin_mc);
        } else if (this.type == JewelsType.SHOE_SHAPED) {
            this.shoe_shaped_mc = Common.buildTypeMc("shoe-shaped_json", "shoe-shaped_png", "shoe-shaped");
            this.shoe_shaped_mc.anchorOffsetX = this.shoe_shaped_mc.width / 2;
            this.shoe_shaped_mc.anchorOffsetY = this.shoe_shaped_mc.height / 2;
            this.addChild(this.shoe_shaped_mc);
            // this.shoe_shaped_tw = egret.Tween.get(this.shoe_shaped,{loop:true});
            // this.shoe_shaped_tw.to({rotation:360},3000);
        } else if (this.type == JewelsType.CHEST) {
            this.chest_mc = Common.buildTypeMc("chest_json", "chest_png", "chest");
            this.chest_mc.scaleX = 0.5;
            this.chest_mc.scaleY = 0.5;
            this.chest_mc.anchorOffsetX = this.chest_mc.width / 2;
            this.chest_mc.anchorOffsetY = this.chest_mc.height / 2;
            this.addChild(this.chest_mc);
            // this.chest_tw = egret.Tween.get(this.shoe_shaped,{loop:true});
            // this.chest_tw.to({y:1000,rotation:360},3000);
        } else {
            this.bomb_mc = Common.buildTypeMc("bomb_json", "bomb_png", "bomb");
            this.bomb_mc.anchorOffsetX = this.bomb_mc.width / 2;
            this.bomb_mc.anchorOffsetY = this.bomb_mc.height / 2;
            this.addChild(this.bomb_mc);
        }

        egret.Tween.get(this, { loop: true }).to({ rotation: 360 }, 3000)
    }

    public getScore() {
        return this.score;
    }

    public getType() {
        return this.type;
    }

    public getSpeed() {
        return this.speed;
    }

}