import React from 'react';
import Invigilator from '../ContextComponents/Invigilator';
import {createContext}from "react";

export const ThemeProvider=createContext();
const UseContext=()=>{
    return(
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5,cgpa:8.5}}>
            <h1>this is USeContext page</h1>
            <h2>Student writing exam</h2>
            <Invigilator/>
            </ThemeProvider.Provider>
        </div>
    )
}
export default UseContext;