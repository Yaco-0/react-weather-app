import CitySearch from "../../components/HomeComponents/HomeLeft/CitySearch/CitySearch";
import DailyForecast from "../../components/HomeComponents/HomeRight/DailyForecast/DailyForecast";
import AirCondition from "../../components/HomeComponents/HomeLeft/AirCondition/AirCondition";
import './home.css';


const Home = () => {
    return ( 
        <div className="home">
            <div className="left">
                <CitySearch/>
                <AirCondition/>
            </div>
            {/* <div className="right">
                <DailyForecast/>
            </div> */}
        </div>
     );
}
 
export default Home;