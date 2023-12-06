

export type ValueSettingsType = {
    minValue: number,
    maxValue: number,
    isSettingValues: boolean,
    isDisabled: boolean
}

type ActionsType = ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setMinValueAC> | ReturnType<typeof disableButtonAC>


const initialState = {
    minValue: 0,
    maxValue: 5,
    isSettingValues: false,
    isDisabled: true
}

export const valueSettingsReducer = (state: ValueSettingsType = initialState, action: ActionsType): ValueSettingsType => {
    switch (action.type) {
        case 'SET-MIN-VALUE':
            return {
                ...state,
                minValue: action.minValue, isSettingValues: true, isDisabled: false
            }
        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.maxValue, isSettingValues: true, isDisabled: false
            }
        case 'DISABLE':
            return {
                ...state,
                isSettingValues: false, isDisabled: true
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

export const disableButtonAC =()=> {
    return {type : 'DISABLE'} as const
}
