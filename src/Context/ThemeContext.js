import { createContext, useReducer } from "react";
import { ThemeReducer } from "./Reducer/Theme.Reducer";

const ThemeContext = createContext();

const initVal = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initVal);

    const TOGGLE_THEME = (val) => {
        let newtheme = val === 'light' ? 'dark' : 'light';
        dispatch({ type: TOGGLE_THEME, payload: newtheme });
    }
    
    return (
        <ThemeContext.Provider
            value={{
                ...state,
                TOGGLE_THEME
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;