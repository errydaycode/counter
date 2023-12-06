import {ValueSettingsType} from "../App";


type ActionsType = ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setMinValueAC>


const initialState = {
    minValue: 0,
    maxValue: 5
}

export const valueSettingsReducer = (state: ValueSettingsType = initialState, action: ActionsType): ValueSettingsType => {
    switch (action.type) {
        case 'SET-MIN-VALUE':
            return {
                ...state,
                minValue: action.minValue
            }
        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state;
    }
}

export const setMinValueAC = (minValue: number) => {
    return { type: 'SET-MIN-VALUE', minValue} as const
}
export const setMaxValueAC = (maxValue: number) => {
    return { type: 'SET-MAX-VALUE' , maxValue} as const
}
