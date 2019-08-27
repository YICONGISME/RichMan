class DataManager {
    private static _instance: DataManager = null;


    constructor() {

    }

    private _jewel_data;
    private _boss_data;
    private _stage_data;

    public static getInstance() {
        if (this._instance == null) {
            this._instance = new DataManager();
        }
        return this._instance;

    }

    public initData() {
        this._jewel_data = RES.getRes("jewel_data")["jewel"];
        this._boss_data = RES.getRes("boss_data")["boss"];
        this._stage_data = RES.getRes("stage_data")["stage"];
    }

    public getStageById(id) {
        return this._stage_data[id - 1];
    }

    public getBossDataById(id) {
        return this._boss_data[id - 1]
    }

    public getJewelById(id) {
        return this._jewel_data[id];
    }


    public getScoreByJewelsType(type) {
        return this._jewel_data[type].score;
    }

    public getSpeedByJewelsType(type) {
        return this._jewel_data[type].speed;
    }
}