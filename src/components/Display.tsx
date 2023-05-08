import React from 'react';
import './Display.css'

type DisplayPropsType={
    value: number
    maxValue: number
    minValue: number
    isSettingValues: boolean
}


export const Display = (props: DisplayPropsType) => {
    const { value, maxValue, minValue, isSettingValues } = props;


    return (

            minValue < 0 || maxValue === minValue || minValue > maxValue ?
                <div className={'incorrect'}>Incorrect Value!</div>
                :

            <div className={value === maxValue ? 'red' : 'display'}>


                {isSettingValues

                    ?
                    <div className={'enter'}>
                        Enter values and press "set"
                    </div>

                    : value}
            </div>


    );
};

