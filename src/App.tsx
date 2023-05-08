import React, {useEffect, useState} from 'react';

import './App.css';
import {Display} from "./components/Display";
import SuperButton from "./components/SuperButton";
import {SetterDisplay} from "./components/SetterDisplay";

function App() {


    let [valueSettings, setValueSettings] = useState({
        minValue: 0,
        maxValue: 5,
    })


    const [increment, setIncrement] = useState<number>(0);
    const [isSettingValues, setIsSettingValues] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        let newStartValueStr = localStorage.getItem("startValue")
        let newMaxValueStr = localStorage.getItem("maxValue")
        if (newStartValueStr && newMaxValueStr) {
            let newStartValue = JSON.parse(newStartValueStr)
            let newMaxValue = JSON.parse(newMaxValueStr)
            setValueSettings({...valueSettings, minValue: newStartValue, maxValue: newMaxValue})
            setIncrement(valueSettings.minValue)
        }
    }, [])


    const setSettingsToStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(valueSettings.minValue));
        localStorage.setItem('maxValue', JSON.stringify(valueSettings.maxValue));
        setIncrement(valueSettings.minValue);
        setIsSettingValues(false)
        setIsDisabled(true)
    }


    useEffect(()=> {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setIncrement(newValue)
        }
    }, [])


    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(increment))
    }, [increment])


    const incrementCounter = () => {
        setIncrement(increment + 1)
    }

    const onResetHandler = () => {
        setIncrement(valueSettings.minValue)

    }

    const setMinValue = (startValue: number) => {
        setValueSettings({...valueSettings, minValue: startValue})
    }

    const setMaxValue = (maxValue: number) => {
        setValueSettings({...valueSettings, maxValue: maxValue})
    }


    const turnOnSettings = () => {
        setIsSettingValues(true);
        setIsDisabled(false)
    };

    // const handleSetClick = () => {
    //     setIsSettingValues(false);
    // }

  return (
    <div className="App">
        <div className='Box'>
      <Display value={increment}
               maxValue={valueSettings.maxValue}
               minValue={valueSettings.minValue}
               isSettingValues={isSettingValues}
      />
            <div className={'buttons'}>
                <SuperButton name={'inc'} callBack={incrementCounter} disabled={increment === valueSettings.maxValue}/>
                <SuperButton name={'reset'} callBack={onResetHandler} disabled={increment === valueSettings.minValue}/>
            </div>
        </div>
        <div className='Box'>
            <SetterDisplay
                                inc={increment}
                            maxValue={valueSettings.maxValue}
                           minValue={valueSettings.minValue}
                           setMinValue={setMinValue}
                           setMaxValue={setMaxValue}
                           setSettingsToStorage={setSettingsToStorage}
                                turnOnSettings={turnOnSettings}
            />

            <div className={'buttons'}>
                <SuperButton name={'set'} callBack={setSettingsToStorage} disabled={isDisabled}/>
            </div>
        </div>
    </div>
  );
}

export default App;
