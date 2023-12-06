import {useEffect} from "react";

// useEffect(() => {
//     let newStartValueStr = localStorage.getItem("startValue") // забираем значение из localStorage для startValue
//     let newMaxValueStr = localStorage.getItem("maxValue") // и maxValue
//     if (newStartValueStr && newMaxValueStr) { // делаем проверку на null , чтобы не ругался typeScript
//         let newStartValue = JSON.parse(newStartValueStr) // полученные значения приводим
//         // из строки в число
//         let newMaxValue = JSON.parse(newMaxValueStr) // (обртаня операция)
//         setValueSettings({...valueSettings, minValue: newStartValue, maxValue: newMaxValue}) // и сетаем их в настройки счетчика
//
//     }
// }, []) // данные действия выполняем для того, чтобы при загрузке страницы, отображались последние данные, сохраненные в localStorage


// const setSettingsToStorage = () => {           // функция для кнопки set в настройках счетчика
//     // localStorage.setItem('startValue', JSON.stringify(valueSettings.minValue)); // сетаем в localStorage минимальное
//     // localStorage.setItem('maxValue', JSON.stringify(valueSettings.maxValue)); // и максимальное значение счетчика
//     setIncrement(valueSettings.minValue); // сетаем значение на дисплее счетчика до минимально допустипого
//     setIsSettingValues(false) // сетаем, что провели изменения в настройках, чтобы убрать надпись Enter values and press "set"
//     setIsDisabled(true) // дизейблим кнопку set после ввода новых настроек
// }



// useEffect(() => {
//     let valueAsString = localStorage.getItem('counterValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         setIncrement(newValue)
//     }
// }, []) // этот useEffect необходим для того, чтобы при обновлении страницы или новой загрузке приложения, нам отображалось последнее сохраненное в storage значение счетчика, а не начиналось опять с нуля



// useEffect(() => {
//     localStorage.setItem('counterValue', JSON.stringify(increment))
// }, [increment]) // данный useEffect используем чтобы сетать новое значение в localStorage каждый раз, когда меняется наше значение счетчика