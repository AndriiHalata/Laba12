const apiKey = '4386e04913738c841ec72d5941f395f7';
const city = 'Крюківщина';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},Київ&appid=${apiKey}&units=metric`;

const getWeatherData = async () => {
try {
const response = await fetch(apiUrl);
const data = await response.json();
const temperature = data.main.temp;
const humidity = data.main.humidity;
const windSpeed = data.wind.speed;
const weatherDataDiv = document.getElementById('weather-data');
weatherDataDiv.innerHTML = `Температура: ${temperature}°C Вологість: ${humidity}% Швидкість вітру: ${windSpeed} м/с`;
} catch (error) {
console.error(error);
}
};

const getWeatherBtn = document.getElementById('get-weather-btn');
getWeatherBtn.addEventListener('click', getWeatherData);