import React, {useEffect, useState} from 'react';

import './App.css';
import {Display} from "./components/Display";
import SuperButton from "./components/SuperButton";
import {SetterDisplay} from "./components/SetterDisplay";

function App() {


    let [valueSettings, setValueSettings] = useState({
        minValue: 0,
        maxValue: 5,
    })  // объявляем изначальные настройки значения счетчика для дисплея настроек


    const [increment, setIncrement] = useState<number>(0); // изначальное состояние самого счетчика на дисплее
    const [isSettingValues, setIsSettingValues] = useState(false); // стейт для отслеживания изменений настроек счетчика
    const [isDisabled, setIsDisabled] = useState(true) // стейт для дизейбла кнопки set

    useEffect(() => {
        let newStartValueStr = localStorage.getItem("startValue") // забираем значение из localStorage для startValue
        let newMaxValueStr = localStorage.getItem("maxValue") // и maxValue
        if (newStartValueStr && newMaxValueStr) { // делаем проверку на null , чтобы не ругался typeScript
            let newStartValue = JSON.parse(newStartValueStr) // полученные значения приводим к из строки в число
            let newMaxValue = JSON.parse(newMaxValueStr) // (обртаня операция)
            setValueSettings({...valueSettings, minValue: newStartValue, maxValue: newMaxValue}) // и сетаем их в настройки счетчика

        }
    }, []) // данные действия выполняем для того, чтобы при загрузке страницы, отображались последние данные, сохраненные в localStorage


    const setSettingsToStorage = () => {           // функция для кнопки set в настройках счетчика
        localStorage.setItem('startValue', JSON.stringify(valueSettings.minValue)); // сетаем в localStorage минимальное
        localStorage.setItem('maxValue', JSON.stringify(valueSettings.maxValue)); // и максимальное значение счетчика
        setIncrement(valueSettings.minValue); // сетаем значение на дисплее счетчика до минимально допустипого
        setIsSettingValues(false) // сетаем, что провели изменения в настройках, чтобы убрать надпись Enter values and press "set"
        setIsDisabled(true) // дизейблим кнопку set после ввода новых настроек
    }


    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setIncrement(newValue)
        }
    }, []) // этот useEffect необходим для того, чтобы при обновлении страницы или новой загрузке приложения, нам отображалось последнее сохраненное в storage значение счетчика, а не начиналось опять с нуля


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(increment))
    }, [increment]) // данный useEffect используем чтобы сетать новое значение в localStorage каждый раз, когда меняется наше значение счетчика


    const incrementCounter = () => {
        setIncrement(increment + 1)
    } // ф-ия для кнопки inc, при нажатии увеличиваем значение на + 1

    const onResetHandler = () => {
        setIncrement(valueSettings.minValue)
    } // ф-ия для кнопки reset, при нажатии сбрасываем до минимально допустимого значения

    const setMinValue = (startValue: number) => {
        setValueSettings({...valueSettings, minValue: startValue})
    } // эта функция callBack для события onChange инпута, в котором мы устанавливаем минимально допустимое значение нашего счетчика. Он принимает параметр startValue: number. Когда в этом инпуте мы вводим новое минмальное значение, он передаст нам его в эту ф-ию, и уже здесь мы засетаем его в minValue, после чего нельзя будет начинать считать со значения, меньше установленного нами в инпуте.

    const setMaxValue = (maxValue: number) => {
        setValueSettings({...valueSettings, maxValue: maxValue})
    } // эта функция callBack для события onChange инпута, в котором мы устанавливаем максимально допустимое значение нашего счетчика. Он принимает параметр startValue: number. Когда в этом инпуте мы вводим новое максимальнон значение, он передаст нам его в эту ф-ию, и уже здесь мы засетаем его в maxValue, после чего нельзя будет увеличивать значение, больше установленного нами в инпуте.


    const turnOnSettings = () => {
        setIsSettingValues(true);
        setIsDisabled(false)
    }; // еще одна функция для onChange нашего инпута, она нужна для того, чтобы при каких-либо изменениях в инпуте, мы устанавливали setIsSettingValues на тру, и компонент дисплей отображал текст Enter values and press "set", а так же раздизейбливал кнопку set. Как только мы установим необходимые значения счетчика и нажмём set, то вызовется функция setSettingsToStorage, привязанная к событию onClick кнопки set, и заново задизейблит кнопку, а так же установит setIsSettingValues на false, чтобы компонент Display перестал отображать надпись Enter values and press "set", так как мы уже установили значения и нажали сет, а вместо этого начал отображать значение счетчика, начиная с минимального, установленного нами.


    return (
        <div className="App">
            <div className='Box'>
                <Display value={increment} // передаем дисплею значение счетчика
                         maxValue={valueSettings.maxValue} // передаем максимальное
                         minValue={valueSettings.minValue} // и передаем минимальное для того чтобы задать верный классНейм
                         isSettingValues={isSettingValues} // передаем для того, чтобы дисплей отображал либо value, либо текст при вводе настроек
                />
                <div className={'buttons'}>
                    <SuperButton name={'inc'} callBack={incrementCounter} // кнопки  кнопки с коллбеками для увеличения/сброса значения счетчика
                                 disabled={increment === valueSettings.maxValue}/>
                    <SuperButton name={'reset'} callBack={onResetHandler}
                                 disabled={increment === valueSettings.minValue}/>
                </div>
            </div>
            <div className='Box'>
                <SetterDisplay // дисплей ввода настроек минимального/максимального значения счетчика
                    maxValue={valueSettings.maxValue} // минимальное значение счетчика для инпута startValue
                    minValue={valueSettings.minValue} // максимальное значение счетчика для инпута maxValue
                    setMinValue={setMinValue} // callBack для установки минимального ( задаем его в инпуте, передаем в стейт, и из стейта в инпут приходит уже новое установленное значение ( FLUX) )
                    setMaxValue={setMaxValue}  // callBack для установки максимального ( задаем его в инпуте, передаем в стейт, и из стейта в инпут приходит уже новое установленное значение ( FLUX) )
                    turnOnSettings={turnOnSettings} // еще один коллБэк для инпута, который реагирует на изменения в инпуте ( onChange) и а) Раздизейбливает кнопку сет, чтобы пользователь мог установить новые значения настроек б) устанавливает на второй дисплей фразу "Enter correct values..."
                />

                <div className={'buttons'}>
                    <SuperButton name={'set'}
                                 callBack={setSettingsToStorage} // Устанавливает значение в локальное хранилище,  подробнее см строка 33
                                 disabled={isDisabled} // устанаваливается в функциях setSettingsToStorage и turnOnSettings

                    // Кнопка set для установки значений в настройках.
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
