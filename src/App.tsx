import React, {useEffect, useState} from 'react';

import './App.css';
import {Display} from "./components/Display";
import SuperButton from "./components/SuperButton";
import {SetterDisplay} from "./components/SetterDisplay";
import {useDispatch, useSelector} from "react-redux";
import {setMaxValueAC, setMinValueAC} from "./state/value-settings-reducer";
import {AppRootType} from "./state/store";
import {CounterStateType, incrementCounterAC, resetCounterAC} from "./state/increment-reducer";


export type ValueSettingsType = {
    minValue: number,
    maxValue: number
}

function App() {

    const valueSettings = useSelector<AppRootType, ValueSettingsType>(state => state.valueSettings)
    const increment = useSelector<AppRootType, CounterStateType>(state => state.increment)
    const dispatch = useDispatch()

    const [isSettingValues, setIsSettingValues] = useState(false); // стейт для отслеживания изменений настроек счетчика
    const [isDisabled, setIsDisabled] = useState(true) // стейт для дизейбла кнопки set


    const setSettingsOnSettingsDisplay = () => {           // функция для кнопки set в настройках счетчика
        // localStorage.setItem('startValue', JSON.stringify(valueSettings.minValue)); // сетаем в localStorage минимальное
        // localStorage.setItem('maxValue', JSON.stringify(valueSettings.maxValue)); // и максимальное значение счетчика
        dispatch(resetCounterAC(valueSettings.minValue)); // сетаем значение на дисплее счетчика до минимально допустипого
        setIsSettingValues(false) // сетаем, что провели изменения в настройках, чтобы убрать надпись Enter values and press "set"
        setIsDisabled(true) // дизейблим кнопку set после ввода новых настроек
    }
    const turnOnSettings = () => {
        setIsSettingValues(true);
        setIsDisabled(false)
    };


    const incrementCounter = () => {
      dispatch(incrementCounterAC())
    } // ф-ия для кнопки inc, при нажатии увеличиваем значение на + 1

    const onResetHandler = () => {
        dispatch(resetCounterAC(valueSettings.minValue))
    } // ф-ия для кнопки reset, при нажатии сбрасываем до минимально допустимого значения

    // const setMinValue = (minValue: number) => {
    //     dispatch(setMinValueAC(minValue))
    // } // эта функция callBack для события onChange инпута, в котором мы устанавливаем минимально допустимое значение нашего счетчика. Он принимает параметр startValue: number. Когда в этом инпуте мы вводим новое минмальное значение,
    // он передаст нам его в эту ф-ию, и уже здесь мы засетаем его в minValue, после чего нельзя будет начинать считать со значения, меньше установленного нами в инпуте.

    // const setMaxValue = (maxValue: number) => {
    //   dispatch(setMaxValueAC(maxValue))
    // } // эта функция callBack для события onChange инпута, в котором мы устанавливаем максимально допустимое значение нашего счетчика. Он принимает параметр startValue: number. Когда в этом инпуте мы вводим новое максимальнон значение,
    // он передаст нам его в эту ф-ию, и уже здесь мы засетаем его в maxValue, после чего нельзя будет увеличивать значение, больше установленного нами в инпуте.


  // еще одна функция для onChange нашего инпута, она нужна для того,
    // чтобы при каких-либо изменениях в инпуте, мы устанавливали setIsSettingValues на тру,
    // и компонент дисплей отображал текст Enter values and press "set", а так же раздизейбливал кнопку set.
    // Как только мы установим необходимые значения счетчика и нажмём set, то вызовется функция setSettingsOnSettingsDisplay, привязанная к событию onClick кнопки set,
    // и заново задизейблит кнопку, а так же установит setIsSettingValues на false, чтобы компонент Display перестал отображать надпись Enter values and press "set",
    // так как мы уже установили значения и нажали сет, а вместо этого начал отображать значение счетчика, начиная с минимального, установленного нами.


    return (
        <div className="App">
            <div className='Box'>
                <Display // передаем дисплею значение счетчика
                         maxValue={valueSettings.maxValue} // передаем максимальное
                         minValue={valueSettings.minValue} // и передаем минимальное для того чтобы задать верный классНейм
                         isSettingValues={isSettingValues} // передаем для того, чтобы дисплей отображал либо value, либо текст при вводе настроек
                />
                <div className={'buttons'}>
                    <SuperButton name={'inc'} callBack={incrementCounter} //   кнопки с коллбеками для увеличения/сброса значения счетчика
                                 disabled={increment.counterValue === valueSettings.maxValue}/>
                    <SuperButton name={'reset'} callBack={onResetHandler}
                                 disabled={increment.counterValue === valueSettings.minValue}/>
                </div>
            </div>
            <div className='Box'>
                <SetterDisplay // дисплей ввода настроек минимального/максимального значения счетчика
                   // минимальное значение счетчика для инпута startValue
                    // максимальное значение счетчика для инпута maxValue
                     // callBack для установки минимального ( задаем его в инпуте, передаем в стейт, и из стейта в инпут приходит уже новое установленное значение ( FLUX) )  // callBack для установки максимального ( задаем его в инпуте, передаем в стейт, и из стейта в инпут приходит уже новое установленное значение ( FLUX) )
                    turnOnSettings={turnOnSettings} // еще один коллБэк для инпута, который реагирует на изменения в инпуте ( onChange) и а) Раздизейбливает кнопку сет,\
                    // чтобы пользователь мог установить новые значения настроек б) устанавливает на второй дисплей фразу "Enter correct values..."
                />



                <div className={'buttons'}>
                    <SuperButton name={'set'}
                                 callBack={setSettingsOnSettingsDisplay} // Устанавливает значение в локальное хранилище,  подробнее см строка 33
                                 disabled={isDisabled} // устанаваливается в функциях setSettingsOnSettingsDisplay и turnOnSettings
                    // Кнопка set для установки значений в настройках.
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
