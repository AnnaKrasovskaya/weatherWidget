// Конфиг с базовыми данными
const time = new Date();
const apiKey = 'a94d0a5ac08570add4b47b8da933f247'
const city = 'Minsk'
const currentTimeResult = {

  hours: time.getHours(),
  minutes: time.getMinutes()
}


export {apiKey, city, currentTimeResult}