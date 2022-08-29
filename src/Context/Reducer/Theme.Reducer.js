import { TOGGLE_THEME } from "../ActionType";

export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}