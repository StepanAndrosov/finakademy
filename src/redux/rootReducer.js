const initialState = {
    language: 'ru'
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'RU':
            return {
                ...state, language: 'ru'
            }
        case 'EN':
            return {
                ...state, language: 'en'
            }
        default:
            return state
    }
}