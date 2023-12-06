import React from 'react';
import './Display.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../state/store";
import {CounterStateType, incrementCounterAC, resetCounterAC} from "../state/increment-reducer";
import SuperButton from "./SuperButton";
import {ValueSettingsType} from "../state/value-settings-reducer";



export const Display = ( ) => {

    const isSettingValues = useSelector<AppRootType, boolean>(state => state.valueSettings.isSettingValues)
    const value = useSelector<AppRootType, CounterStateType>(state => state.increment)
    const valueSettings = useSelector<AppRootType, ValueSettingsType>(state => state.valueSettings)
    const dispatch  = useDispatch()

    const incrementCounter = () => {
        dispatch(incrementCounterAC())
    }
    const onResetHandler = () => {
        dispatch(resetCounterAC(valueSettings.minValue))
    }


    return (

        valueSettings.minValue < 0 ||  valueSettings.maxValue ===  valueSettings.minValue ||  valueSettings.minValue >  valueSettings.maxValue ?
            <div className={'incorrect'}>Incorrect Value! </div>
            :
            <div>

                {isSettingValues
                    ?
                    <div className={'enter'}>
                        Enter values and press "set"
                    </div>
                    :
                    <div className={value.counterValue ===  valueSettings.maxValue ? 'red' : 'display'}>{value.counterValue}</div>
                }
                <div className={'buttons'}>
                    <SuperButton name={'inc'} callBack={incrementCounter} //   кнопки с коллбеками для увеличения/сброса значения счетчика
                                 disabled={value.counterValue === valueSettings.maxValue}/>
                    <SuperButton name={'reset'} callBack={onResetHandler}
                                 disabled={value.counterValue === valueSettings.minValue}/>
                </div>
            </div>


    );
};

