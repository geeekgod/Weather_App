import env from 'dotenv';
import axios from 'axios';
import isWeather from '../Interface/interface';
env.config();
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const FetchWeatherData = async (request:string) =>{
    const weatherData = await axios.get(apiUrl,{
        params:{
            q: request,
            units: "metric",
            APPID: apiKey
        }
    });

    const finalData: isWeather = weatherData.data;

    return finalData;
}

export default FetchWeatherData;