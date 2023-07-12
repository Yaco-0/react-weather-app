import { createContext,useReducer } from "react";

export const WeatherContext = createContext();

const weahterReducer = (state,action)=>{
    switch (action.type){
        case 'GET_WEATHER':
            return {
                weather:action.payload
            }
    }
}

export const WeatherContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(weahterReducer,{
        weather:null
    })
    return(
        <WeatherContext.Provider value={{...state,dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}