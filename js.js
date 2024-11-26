const weatherApiKey = 'Your-API-Key';
const aqiApiKey = 'Your-API-Key';

// Update clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// AQI recommendations
function getRecommendation(aqi) {
  if (aqi <= 50) return 'Air is clean. Enjoy your day!';
  if (aqi <= 100) return 'Moderate air quality. Sensitive groups should limit outdoor activities.';
  if (aqi <= 150) return 'Unhealthy for sensitive groups. Consider wearing a mask.';
  if (aqi <= 200) return 'Unhealthy. Wear a mask and reduce outdoor activities.';
  if (aqi <= 300) return 'Very unhealthy. Avoid going outdoors.';
  return 'Hazardous! Stay indoors and close all windows.';
}

function getWeatherAndAQI() {
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  document.getElementById('searched-city').textContent = `You searched: ${city}`;

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
  const aqiApiUrl = `https://api.waqi.info/feed/${city}/?token=${aqiApiKey}`;

  // Fetch weather
  fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const tempCelsius = (data.main.temp - 273.15).toFixed(1);
        document.getElementById('weather-info').textContent = `${tempCelsius}°C`;
      } else {
        document.getElementById('weather-info').textContent = 'City not found.';
      }
    })
    .catch(console.error);

  // Fetch AQI
  fetch(aqiApiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        const aqi = data.data.aqi;
        document.getElementById('aqi-info').textContent = `AQI: ${aqi}`;
        document.getElementById('recommendation').textContent = getRecommendation(aqi);

        const meter = document.getElementById('cigarette-meter');
        const width = Math.min((aqi / 300) * 100, 100); // Normalize AQI to bottle width
        meter.style.width = `${width}%`;

        // Dynamic color
        if (aqi <= 50) meter.style.background = 'green';
        else if (aqi <= 100) meter.style.background = 'yellow';
        else meter.style.background = 'red';
      } else {
        document.getElementById('aqi-info').textContent = 'AQI data not available.';
      }
    })
    .catch(console.error);
}

document.getElementById('fetch-button').addEventListener('click', getWeatherAndAQI);
``
