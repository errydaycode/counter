import {combineReducers, legacy_createStore} from "redux";
import {valueSettingsReducer} from "./value-settings-reducer";
import {counterReducer} from "./increment-reducer";

const rootRedcuer = combineReducers({
    valueSettings: valueSettingsReducer,
    increment: counterReducer
})


export const store = legacy_createStore(rootRedcuer);


export type AppRootType = ReturnType<typeof rootRedcuer>