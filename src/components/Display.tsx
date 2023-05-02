import React from 'react';
import './Display.css'

type DisplayPropsType={
    value: number
    maxValue: number
}


export const Display = (props: DisplayPropsType) => {
    return (
        <div className={props.value === props.maxValue ? 'red' : 'display'}>
            {props.value}
        </div>
    );
};

