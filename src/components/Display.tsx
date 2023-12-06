import React from 'react';
import './Display.css'
import {useSelector} from "react-redux";
import {AppRootType} from "../state/store";
import {CounterStateType} from "../state/increment-reducer";

type DisplayPropsType = {

    maxValue: number
    minValue: number
    isSettingValues: boolean
}


export const Display = (props: DisplayPropsType) => {
    const { maxValue, minValue, isSettingValues} = props;


    const value = useSelector<AppRootType, CounterStateType>(state => state.increment)

    return (

        minValue < 0 || maxValue === minValue || minValue > maxValue ?
            <div className={'incorrect'}>Incorrect Value!</div>
            :

            <div>

                {isSettingValues
                    ?
                    <div className={'enter'}>
                        Enter values and press "set"
                    </div>
                    :
                    <div className={value.counterValue === maxValue ? 'red' : 'display'}>{value.counterValue}</div>
                }
            </div>


    );
};

