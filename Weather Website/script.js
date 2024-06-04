const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'd0c019b00560124e0ce2c93616537f8f'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = "City not found";
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherResult').innerHTML = "Error fetching data";
    }
}
