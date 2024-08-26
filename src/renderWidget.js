import {city, currentTimeResult} from './config.js'

// Функция рендера элементов
const renderWidget = (weatherList, app) => {
  weatherList.forEach((el, index) => {
    // Рендерим каждый 8 элемент
    if (index % 8 === 0) {
      // Для первого даем класс Актив
      if (index !== 0) {
        app.append(weatherWidgetElement(el, false))
      } else {
        app.append(weatherWidgetElement(el, true))
      }
    }
  })
}

// Функция создания хтмл элемента погоды
const weatherWidgetElement = (weatherObject, isActive = false) => {
  const element = document.createElement('div')
  element.classList.add(`weather-element`)
  if (isActive) {
    element.classList.add('active')
  }
  element.innerHTML = `
    <div class = "info">${city} 
        <span>${isActive ? currentTimeResult.hours + ':' + currentTimeResult.minutes : weatherObject.dt_txt}</span>
    </div>
    <div class="icon">
        <img width="60" height="60" src="https://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png" alt="">
        <span class="wether-description">${weatherObject.weather[0].main}</span>
        ${weatherObject.main.temp} °C
    </div>
    <div class="wind">
        <span>Speed</span> 
        ${weatherObject.wind.speed} m/s 
    </div>
`
  return element
}


export default renderWidget