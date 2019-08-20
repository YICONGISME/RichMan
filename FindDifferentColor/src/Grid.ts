
// 格子类
class Grid extends egret.Sprite {
    constructor(row, col, color = 0xffffff) {
        super();
        this._row = row;
        this._col = col;
        this._color = color;
        this.initView();
    }

    private _row;
    private _col;
    private _color;
    public _isDifferent = false;

    private view: egret.Shape;

    private initView() {


        this.view = new egret.Shape();
       
        this.addChild(this.view);
        this.updateView();
    }

    private updateView() {
        this.view.graphics.clear();
        this.view.graphics.beginFill(this._color);
        this.view.graphics.drawRect(this.col * 120 , this.row * 120, 100, 100);
        this.view.graphics.endFill();
    }

    public get row() {
        return this._row;
    }

    public get col() {
        return this._col;
    }

    public get color() {
        return this._color;
    }

    public set color(value) {
        this._color = value;
        this.updateView();
    }

    public set row(value) {
        this._row = value;
    }

    public set col(value) {
        this._col = value;
    }

}