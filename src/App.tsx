import React, {useEffect, useState} from 'react';

import './App.css';
import {Display} from "./components/Display";
import SuperButton from "./components/SuperButton";
import {SetterDisplay} from "./components/SetterDisplay";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState(0)



    useEffect(()=> {
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newValueMinimum = JSON.parse(minValueAsString)
            setMinValue(newValueMinimum)
        }


    },[] )


    useEffect(()=> {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValueMaximun = JSON.parse(maxValueAsString)
            setMaxValue(newValueMaximun)
        }


    }, [])



    const onIncreaseHandler = () => {
        setCount(count => count + 1)
    }

    const onResetHandler = () => {
        setCount(minValue)
    }


    function handleSettingsChange(newMinValue: number, newMaxValue: number) {
        setMinValue(newMinValue);
        setMaxValue(newMaxValue);
        setCount(minValue)
        localStorage.setItem('minValue', JSON.stringify(newMinValue))
        localStorage.setItem('maxValue', JSON.stringify(newMaxValue))
    }


  return (
    <div className="App">
        <div className='Box'>
      <Display value={count} maxValue={maxValue} minValue={minValue}/>
            <div className={'buttons'}>
                <SuperButton name={'inc'} callBack={onIncreaseHandler} disabled={count === maxValue}/>
                <SuperButton name={'reset'} callBack={onResetHandler} disabled={count === minValue}/>
            </div>
        </div>
        <div className='Box'>
            <SetterDisplay maxValue={maxValue}
                           minValue={minValue}
                           handleSettingsChange={handleSettingsChange}
                           setMinValue={setMinValue}
                           setMaxValue={setMaxValue}
            />
        </div>
    </div>
  );
}

export default App;
