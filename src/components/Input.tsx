import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title:string
    value:number
    callBack:(value:number)=> void
    className:string
    turnOnSettings: ()=> void
}


export const Input = (props:InputPropsType) => {

    const onChangeCallBack = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callBack(Number(e.currentTarget.value))
        props.turnOnSettings()

    }

    return (
        <div>
            <span>{props.title}</span> <input className={props.className} type={'number'} value={props.value} onChange={onChangeCallBack}  />
        </div>
    );
};

