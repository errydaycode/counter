import React from 'react';
import './Setter.css'
import {Input} from "./Input";


type SetterDisplayPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    turnOnSettings: ()=> void

}

export const SetterDisplay = (
    {
        minValue,
        maxValue,
        setMaxValue,
        setMinValue,
        ...props

    }
        : SetterDisplayPropsType) => {


    const inputClassName = minValue < 0 || minValue === maxValue || minValue > maxValue ? 'error' : 'centered'


    return (
        <>
            <div className={'setDisplay'}>

                <div className={'values'}>
                    <Input
                        className={inputClassName}
                        title={"Start-Value"}
                        value={minValue}
                        callBack={setMinValue}
                        turnOnSettings={props.turnOnSettings}
                    />

                </div>

                <div className={'values'}>
                    <Input
                        className={inputClassName}
                        value={maxValue}
                        title={"Max-Value"}
                        callBack={setMaxValue}
                        turnOnSettings={props.turnOnSettings}
                    />
                </div>

            </div>

        </>
    );
};

