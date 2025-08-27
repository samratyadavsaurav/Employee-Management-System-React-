import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
// import { AuthContext, AuthProvider } from './context/AuthProvider'


export const AuthContext = createContext()   

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        setUserData(employees)
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}
