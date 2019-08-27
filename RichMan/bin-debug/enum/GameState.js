/**
 * 游戏状态
 * create by tishoy
 * 2019/8/26
 */
var GameState;
(function (GameState) {
    /**
     * 游戏未开始
     */
    GameState.GAME_UNSTART = 0;
    /**
     * 游戏进行中
     */
    GameState.GAME_PLAYING = 1;
    /**
     * 游戏结束
     */
    GameState.GAME_OVER = 2;
})(GameState || (GameState = {}));
