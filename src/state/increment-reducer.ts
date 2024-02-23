

export type CounterStateType = {
    counterValue:number;
}

export const initialState: CounterStateType = {
    counterValue: 0
}


export const counterReducer = (state=initialState, action:ActionType): CounterStateType => {
    switch (action.type){
        case "INCREMENT-COUNTER":{
            return {...state, counterValue: state.counterValue + 1}
        }
        case "RESET-COUNTER":{
            return {...state, counterValue: action.startValue}
        }
        default: return state
    }
}

export type ActionType = incrementCounterACType | resetCounterACType | setValuesFromLSACType

export type incrementCounterACType = ReturnType<typeof incrementCounterAC>
export type resetCounterACType = ReturnType<typeof resetCounterAC>
export type setValuesFromLSACType = ReturnType<typeof setValuesFromLSAC>


export const incrementCounterAC = () => {
    return{
        type: "INCREMENT-COUNTER",
    }as const
}

export const resetCounterAC = (startValue:number) => {
    return{
        type:"RESET-COUNTER",
        startValue
    }as const
}

export const setValuesFromLSAC = (lsValue:number) => {
    return{
        type:"SET-LOCAL-STORAGE-VALUES",
        lsValue
    }as const
}