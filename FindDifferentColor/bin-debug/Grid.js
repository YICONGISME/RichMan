var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// 格子类
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(row, col, color) {
        if (color === void 0) { color = 0xffffff; }
        var _this = _super.call(this) || this;
        _this._isDifferent = false;
        _this._row = row;
        _this._col = col;
        _this._color = color;
        _this.initView();
        return _this;
    }
    Grid.prototype.initView = function () {
        this.view = new egret.Shape();
        this.addChild(this.view);
        this.updateView();
    };
    Grid.prototype.updateView = function () {
        this.view.graphics.clear();
        this.view.graphics.beginFill(this._color);
        this.view.graphics.drawRect(this.col * 120, this.row * 120, 100, 100);
        this.view.graphics.endFill();
    };
    Object.defineProperty(Grid.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (value) {
            this._row = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "col", {
        get: function () {
            return this._col;
        },
        set: function (value) {
            this._col = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    return Grid;
}(egret.Sprite));
__reflect(Grid.prototype, "Grid");
