import React from 'react';
import './Btn.css'

type ButtonPropsType={
    name: string
    callBack: ()=> void
    disabled: boolean
}

const SuperButton = (props: ButtonPropsType) => {

    const onClickHandler =()=> {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled} className={ 'btn'}> {props.name}  </button>
    );
};

export default SuperButton;