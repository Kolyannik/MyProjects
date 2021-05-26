import {makeAutoObservable} from "mobx";

export default class CollectionStore {
    constructor () {
        this._collections = []
        makeAutoObservable(this)
    }

    setCollection(collections){
        this._collections = collections
    }

    get collections() {
        return this._collections
    }
}