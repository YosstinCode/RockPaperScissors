import { createContext, useState } from 'react'

export const scoreContext = createContext(0)

export const ScoreProvider = ({children})=>{

    const [score, setScore] = useState(0)

    return(
        <scoreContext.Provider value={{score, setScore}}>
            {children}
        </scoreContext.Provider>
    )
}
