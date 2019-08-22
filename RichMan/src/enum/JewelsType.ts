module JewelsType {

    export var JewelsScore = [];
    //炸弹
    export const BOMB = 0;
    JewelsScore[BOMB] = -1;
    //金币
    export const COIN = 1;
    JewelsScore[COIN] = 10;
    //元宝
    export const SHOE_SHAPED = 2;
    JewelsScore[SHOE_SHAPED] = 10;
    //宝箱
    export const CHEST = 3;
    JewelsScore[CHEST] = 10;
    //金条
    export const GOLD_BAR = 4;
    JewelsScore[GOLD_BAR] = 10;

    export function getScoreByJewelsType(type) {
        return JewelsScore[type];
    }

}