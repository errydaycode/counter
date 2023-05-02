import React, {ChangeEvent, useState} from 'react';
import './Setter.css'
import SuperButton from "./SuperButton";


type SetterDisplayPropsType = {
    minValue: number
    maxValue: number
    handleSettingsChange: (min: number, max: number) => void
}




export const SetterDisplay = (props: SetterDisplayPropsType) => {

    const [minValue, setMinValue] = useState(props.minValue);
    const [maxValue, setMaxValue] = useState(props.maxValue);


    function handleMinValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMinValue(parseInt(event.target.value));
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(parseInt(event.target.value));
    }
    function handleSubmit() {

        props.handleSettingsChange(minValue, maxValue);
    }

    return (
        <>
            <div className={'setDisplay'}>

                <div className={'values'}>
                    max value:   <input type="number" className={'centered'} onChange={handleMaxValueChange} value={maxValue}/>
                </div>

                <div className={'values'}>
                    start value:  <input type="number" className={'centered'} onChange={handleMinValueChange} value={minValue}/>
                </div>

            </div>
            <div className={'buttons'}>
                <SuperButton name={'set'} callBack={handleSubmit} disabled={false}/>
            </div>
        </>




    );
};

