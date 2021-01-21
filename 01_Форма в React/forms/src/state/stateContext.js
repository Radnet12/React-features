import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [data, setData] = useState({});

    const setValues = (newValues) => {
        setData(prevState => ({
            ...prevState,
            ...newValues
        }));
    }

    return (
        <StateContext.Provider value = {
            {
                data,
                setValues
            }
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useData = () => useContext(StateContext);