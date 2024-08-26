import '../style.css';
import fetchWeatherForecast from './weatherFetch.js';
import renderWidget from './renderWidget.js';

const app = document.querySelector('#app');

// Функция получения погоды и рендер
const fetchAndRenderWeather = async () => {
  try {
    const response = await fetchWeatherForecast();
    if (response.cod && response.cod === '200') {
      renderWidget(response.list, app);
      const weatherElements = app.querySelectorAll('.weather-element');
      weatherElements.forEach(el => {
        el.addEventListener('click', setActive);
      });
    }
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
};

// Коллбэк для слушателя для добавления активного класса
const setActive = (e) => {
  resetActive();
  e.currentTarget.classList.add('active');
};

// Удаление класса актив у существующего элемента чтобы не дублировался
const resetActive = () => {
  const activeElement = document.querySelector('.active');
  if (activeElement) {
    activeElement.classList.remove('active');
  }
};

// Запускаем функцию
fetchAndRenderWeather();