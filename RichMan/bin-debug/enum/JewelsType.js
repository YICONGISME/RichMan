var JewelsType;
(function (JewelsType) {
    JewelsType.JewelsScore = [];
    JewelsType.auto = 0;
    //炸弹
    JewelsType.BOMB = JewelsType.auto++; //0
    JewelsType.JewelsScore[JewelsType.BOMB] = -1;
    //金币
    JewelsType.COIN = JewelsType.auto++; //1
    JewelsType.JewelsScore[JewelsType.COIN] = 10;
    //元宝
    JewelsType.SHOE_SHAPED = JewelsType.auto++; //2
    JewelsType.JewelsScore[JewelsType.SHOE_SHAPED] = 20;
    //宝箱
    JewelsType.CHEST = JewelsType.auto++; //3
    JewelsType.JewelsScore[JewelsType.CHEST] = 30;
    //金条
    //export const GOLD_BAR = auto++;     //4
    //JewelsScore[GOLD_BAR] = 10;
    JewelsType.COUNT = JewelsType.auto;
    function getScoreByJewelsType(type) {
        return JewelsType.JewelsScore[type];
    }
    JewelsType.getScoreByJewelsType = getScoreByJewelsType;
})(JewelsType || (JewelsType = {}));
