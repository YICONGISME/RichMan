module JewelsType {

    export var JewelsScore = [];

    export var auto = 0;
    //炸弹
    export const BOMB = auto++;     //0
    JewelsScore[BOMB] = -1;
    //金币
    export const COIN = auto++;     //1
    JewelsScore[COIN] = 10;
    //元宝
    export const SHOE_SHAPED = auto++;  //2
    JewelsScore[SHOE_SHAPED] = 20;
    //宝箱
    export const CHEST = auto++;    //3
    JewelsScore[CHEST] = 30;
    //金条
    //export const GOLD_BAR = auto++;     //4
    //JewelsScore[GOLD_BAR] = 10;

    export const COUNT = auto;

    export function getScoreByJewelsType(type) {
        return JewelsScore[type];
    }

}