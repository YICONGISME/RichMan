class Common {

    public static buildTypeMc(type_json, type_data, type_mc_data) {
        let type_json_res = RES.getRes(type_json);
        let type_data_res = RES.getRes(type_data);
        let typeFactory = new egret.MovieClipDataFactory(type_json_res, type_data_res);
        let type_mc = new egret.MovieClip(typeFactory.generateMovieClipData(type_mc_data));
        return type_mc;
    }

    //文本居中函数
    public static align_center(item, width, align) {
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


}