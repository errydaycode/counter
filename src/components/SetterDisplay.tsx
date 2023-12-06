import React from 'react';
import './Setter.css'
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../state/store";
import {ValueSettingsType} from "../App";
import {setMaxValueAC, setMinValueAC} from "../state/value-settings-reducer";


type SetterDisplayPropsType = {

    turnOnSettings: ()=> void

}

export const SetterDisplay = (
    {


        ...props

    }
        : SetterDisplayPropsType) => {


    const valueSettings = useSelector<AppRootType, ValueSettingsType>(state => state.valueSettings)
    const dispatch = useDispatch()

    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
        props.turnOnSettings()
    }

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        props.turnOnSettings()
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

            </div>

        </>
    );
};

