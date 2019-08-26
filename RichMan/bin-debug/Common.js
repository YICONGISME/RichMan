var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common = (function () {
    function Common() {
    }
    Common.buildTypeMc = function (type_json, type_data, type_mc_data) {
        var type_json_res = RES.getRes(type_json);
        var type_data_res = RES.getRes(type_data);
        var typeFactory = new egret.MovieClipDataFactory(type_json_res, type_data_res);
        var type_mc = new egret.MovieClip(typeFactory.generateMovieClipData(type_mc_data));
        return type_mc;
    };
    //文本居中函数
    Common.align_center = function (item, width, align) {
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
    return Common;
}());
__reflect(Common.prototype, "Common");
