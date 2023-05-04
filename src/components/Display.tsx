import React from 'react';
import './Display.css'

type DisplayPropsType={
    value: number
    maxValue: number
    minValue: number
}


export const Display = (props: DisplayPropsType) => {
    return (

            props.minValue < 0 || props.maxValue === props.minValue ?
                <div className={'incorrect'}>Incorrect Value!</div>
                :

            <div className={props.value === props.maxValue ? 'red' : 'display'}>
                {props.value}
            </div>


    );
};

