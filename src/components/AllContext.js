'use client'
import React from 'react'

export const AllContext = React.createContext()


export const AllProvider = ({children})=>{

    const [menuOpen,setMenuOpen]=React.useState(false)

    return (
        <AllContext.Provider value={{menuOpen,setMenuOpen}}>
            {children}
        </AllContext.Provider>
    )
}
