import axios from 'axios';
const FORECAST_API_KEY = 'YOUR_API_KEY';
const FORECAST_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${FORECAST_API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${FORECAST_ENDPOINT}&q=${city},us`;
    const request = axios.get(url);

    return{
        type:FETCH_WEATHER,
        payload: request
    }
}