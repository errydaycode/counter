import {combineReducers, legacy_createStore} from "redux";
import {valueSettingsReducer} from "./value-settings-reducer";
import {counterReducer} from "./increment-reducer";
import {loadState, saveState} from "../utills/localsotrage-utils";

const rootRedcuer = combineReducers({
    valueSettings: valueSettingsReducer,
    increment: counterReducer
})




export const store = legacy_createStore(rootRedcuer, loadState() );

store.subscribe(()=> {
     saveState(store.getState())
})


type AppStoreType = typeof store
export type AppRootType = ReturnType<typeof rootRedcuer>

