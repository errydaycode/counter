import React, {ChangeEvent} from 'react';
import './Setter.css'
import SuperButton from "./SuperButton";


type SetterDisplayPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    handleSettingsChange: (min: number, max: number) => void
}


export const SetterDisplay = (
    {
        minValue,
        maxValue,
        setMaxValue,
        setMinValue,
        handleSettingsChange
    }
        : SetterDisplayPropsType) => {


    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setMinValue(parseInt(event.target.value));
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(parseInt(event.target.value));
    }

    function handleSubmit() {
        handleSettingsChange(minValue, maxValue);
    }

    const inputClassName = minValue < 0 || minValue === maxValue ? 'error' : 'centered'

    return (
        <>
            <div className={'setDisplay'}>

                <div className={'values'}>
                    max value: <input type="number" className={inputClassName} onChange={handleMaxValueChange}
                                      value={maxValue}/>
                </div>

                <div className={'values'}>
                    start value: <input type="number" className={inputClassName} onChange={handleMinValueChange}
                                        value={minValue}/>
                </div>

            </div>
            <div className={'buttons'}>
                <SuperButton name={'set'} callBack={handleSubmit} disabled={false}/>
            </div>
        </>


    );
};

