import React from 'react';
import './Setter.css'
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../state/store";
import {ValueSettingsType} from "../state/value-settings-reducer";
import {disableButtonAC, setMaxValueAC, setMinValueAC} from "../state/value-settings-reducer";
import SuperButton from "./SuperButton";
import {resetCounterAC} from "../state/increment-reducer";




export const SetterDisplay = () => {

    const valueSettings = useSelector<AppRootType, ValueSettingsType>(state => state.valueSettings)
    const dispatch = useDispatch()
    const isDisabled = useSelector<AppRootType, boolean>(state => state.valueSettings.isDisabled)

    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
    }

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))

    }
    const setSettingsOnSettingsDisplay = () => {
        dispatch(resetCounterAC(valueSettings.minValue));
        dispatch(disableButtonAC())
    }

    const inputClassName = valueSettings.minValue < 0 || valueSettings.minValue === valueSettings.maxValue || valueSettings.minValue > valueSettings.maxValue ? 'error' : 'centered'

    return (
        <>
            <div className={'setDisplay'}>

                <div className={'values'}>
                    <Input
                        className={inputClassName}
                        title={"Start-Value"}
                        value={valueSettings.minValue}
                        callBack={setMinValue}
                    />

                </div>

                <div className={'values'}>
                    <Input
                        className={inputClassName}
                        value={valueSettings.maxValue}
                        title={"Max-Value"}
                        callBack={setMaxValue}
                    />
                </div>

                <div className={'buttons'}>
                    <SuperButton name={'set'} callBack={setSettingsOnSettingsDisplay}  disabled={isDisabled}
                    />
                </div>
            </div>

        </>
    );
};

