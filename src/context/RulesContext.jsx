import { createContext, useState } from 'react'

export const rulesContext = createContext(false)

export const RulesProvider = ({children})=>{

    const [rules, setRules] = useState(false)

    return(
        <rulesContext.Provider value={{rules, setRules}}>
            {children}
        </rulesContext.Provider>
    )
}
