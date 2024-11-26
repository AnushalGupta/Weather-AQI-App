
# Weather and AQI Info 🌦️

A simple web application that provides real-time weather information and Air Quality Index (AQI) for a given city. Users can search for a city to get weather details (temperature) and AQI levels along with recommendations based on air quality.

---

## 🚀 Features

- **Real-time Weather Updates**: Fetch the current temperature of any city.
- **Air Quality Index (AQI)**: Displays the AQI and offers recommendations based on its value.
- **Dynamic UI**: Responsive design with a real-time clock, animated AQI indicator, and dynamic color coding for AQI levels.

---

## 📂 Project Structure

- **`index.html`**: Main HTML structure of the app.
- **`styled.css`**: CSS for styling and layout.
- **`js.js`**: JavaScript logic for fetching data, updating the clock, and displaying recommendations.
- **`README.md`**: Project documentation.

---

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

2. **API Keys**:
   - Replace the placeholders in `js.js` with your API keys for OpenWeatherMap and WAQI.
     ```javascript
     const weatherApiKey = 'YOUR_WEATHER_API_KEY';
     const aqiApiKey = 'YOUR_AQI_API_KEY';
     ```

3. **Open in Browser**:
   - Open `index.html` in any modern browser to use the application.

---

## 🖥️ Usage

1. Open the app in your browser.
2. Enter a city name in the input field.
3. Click **"Get Info"** to fetch weather and AQI details.
4. View the results, including:
   - Current temperature in Celsius.
   - AQI level with a visual indicator.
   - Safety recommendations based on AQI.

---

## 🎨 Demo

![App Screenshot](demo-image-url)

---

## 🔧 Technologies Used

- **HTML**: Structure and layout of the application.
- **CSS**: Styling and responsiveness.
- **JavaScript**: Data fetching, DOM manipulation, and interactivity.
- **APIs**:
  - [OpenWeatherMap](https://openweathermap.org/) for weather data.
  - [World Air Quality Index](https://waqi.info/) for AQI data.

---

## 🤝 Contribution

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Description of changes"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

## 🌟 Acknowledgements

- Icons and weather data by [OpenWeatherMap](https://openweathermap.org/).
- AQI data provided by [World Air Quality Index](https://waqi.info/).

---

## 📧 Contact

For any inquiries or feedback, please contact: [your-email@example.com]
