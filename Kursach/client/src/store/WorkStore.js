import {makeAutoObservable} from "mobx";

export default class WorkStore {
    constructor () {
        this._works = []
        makeAutoObservable(this)
    }

    setWork(works){
        this._works = works
    }

    get works() {
        return this._works
    }
}