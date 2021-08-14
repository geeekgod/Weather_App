import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config()

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "946390972c5a985626a4d5a7d2da0404";

const FetchWeatherData = async (request:string) =>{
    const weatherData = await axios.get(apiUrl,{
        params:{
            q: request,
            units: "metrics",
            APPID: apiKey
        }
    });

    return weatherData;
}

export default FetchWeatherData;