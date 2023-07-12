import Lottie from 'lottie-react';
import sun from '../../../../assets/the-sun.json';
import './citySearch.css'
import { useState } from 'react';
import { useWeatherContext } from '../../../../hooks/useWeahterContext';
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}
const CitySearch = () => {
    // const currentLocation = getCurrentPosition();
    const API_KEY = '00d77943283ef62109c8da999057624f';
    const [cityName,setCityName] = useState('');
    const [loading,setLoading] = useState(false);
    // const [weather,setWeather] = useState(null);
    const {weather,dispatch} = useWeatherContext();
    const [latLon,setLatLon] = useState({});

    const searchCity = (e)=>{
        if(e.key === 'Enter'){
            setLoading(true);
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    setCityName('');
                    setLatLon({lat:data.coord.lat,lon:data.coord.lon})
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`)
                        .then((res)=>res.json)
                        .then((json)=> {
                            dispatch({type:'GET_WEATHER',payload:data}) ;
                            setLoading(false);
                        })
                })
                .catch(err=>console.log(err))
        }
    }
    
    return ( 
        <div className="city-search">
            <div className="search">
                <input type="text" placeholder='search by city name' value={cityName} onChange={(e)=> setCityName(e.target.value)} onKeyPress={searchCity}/>
                {loading && <div class="loader"></div>}
            </div>
            
            {!weather &&
            <div className='city-info'>
            <div className="city-name">
                
                <h1>---</h1>
                <p>Chance of rain : 0 </p>
                <h1 className='degree'>-&deg;C</h1>
            </div>
            <div>
            <Lottie animationData={sun} className='logo' style={{width:'250px',height:'250px'}}/>
            </div>
            </div>}
            {weather && (typeof weather.main !== 'undefined')?(
                <div className='city-info'>
            <div className="city-name">

                <h1>{weather.name },{weather.sys.country}</h1>
                <p>Chance of rain : 0 </p>
                <h1 className='degree'>{Math.round(weather.main.temp - 273)}&deg;C</h1>
            </div>
            <div>
            <Lottie animationData={sun} className='logo' style={{width:'250px',height:'250px'}}/>
            </div>
            </div>
            ): ('')}
            
            

            
            
        </div>
     )
}
 
export default CitySearch;