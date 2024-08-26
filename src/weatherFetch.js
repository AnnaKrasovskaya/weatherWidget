import {apiKey, city} from "./config.js";
// Получение данных по погоде
async function fetchWeatherForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response.status)
    }
    return await response.json();
  } catch (error) {
    return {error: error.message};
  }
}

export default fetchWeatherForecast;