import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";

export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    if(!context){
        throw Error("useWeahterContext is must be in a WeatherContextProvider");
    }

    return context;
}