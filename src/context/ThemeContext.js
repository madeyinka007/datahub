import React, { createContext, useContext, useState } from "react";
import i18n from "./../lang";

const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [language, setLanguage] = useState('fr')
    const [plan, setPlan] = useState('')

    const changeLanguage = (lang) => {
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }

    return (
        <ThemeContext.Provider value={{
            language, 
            changeLanguage,
            plan, 
            setPlan
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = function(){
    return useContext(ThemeContext)
}