import { wait } from '@testing-library/user-event/dist/utils';
import { useWeatherContext } from '../../../../hooks/useWeahterContext';
import './airCondition.css';
import { FaWind,FaTemperatureHigh,FaRegSun,FaCloudRain } from 'react-icons/fa'
const AirCondition = () => {

    const {weather} = useWeatherContext();
    console.log(weather);
    return ( 
        <div className="air-conditions">
            <h4>Air Conditions</h4>
            {!weather &&
            <div className="conditions">

                <div className="condition real-feel">
                    <h5><FaTemperatureHigh/> Real Feel</h5>
                    <h1>--</h1>
                </div>
                <div className="condition wind">
                    <h5><FaWind/> Wind</h5>
                    <h1>-m/s</h1>
                </div>
                <div className="condition chance-of-rain">
                    <h5><FaCloudRain/> Chance of Rain</h5>
                    <h1>---</h1>
                </div>
                <div className="condition uv">
                    <h5><FaRegSun/> Humidity</h5>
                    <h1>-%</h1>
                </div>
            </div>}
            {weather && (typeof weather.main !== 'undefined')?(
            <div className="conditions">

                <div className="condition real-feel">
                    <h5><FaTemperatureHigh/> Real Feel</h5>
                    <h1>{weather.main.feels_like}</h1>
                </div>
                <div className="condition wind">
                    <h5><FaWind/> Wind</h5>
                    <h1>{weather.wind.speed}m/s</h1>
                </div>
                <div className="condition chance-of-rain">
                    <h5><FaCloudRain/> States</h5>
                    <h1>{weather.weather[0].main}</h1>
                </div>
                <div className="condition uv">
                    <h5><FaRegSun/>Humidity</h5>
                    <h1>{weather.main.humidity}%</h1>
                </div>
            </div>
                ): ('')}

        </div>
     );
}
 
export default AirCondition;