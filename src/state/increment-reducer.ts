

export type CounterStateType = {
    counterValue:number;
}

export const initialState: CounterStateType = {
    counterValue: 0
}


export const counterReducer = (state=initialState, action:ActionType) => {
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

export type ActionType = incrementCounterACType | resetCounterACType

export type incrementCounterACType = ReturnType<typeof incrementCounterAC>
export type resetCounterACType = ReturnType<typeof resetCounterAC>


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