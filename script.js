async function getWeather() {
    const city = document.getElementById('city').value;

    const apiKey = "ca018df54353f065aaed7d802825b8be";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {

            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleString();
const sunset = new Date(data.sys.sunset * 1000).toLocaleString();

            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            document.getElementById("result").innerHTML = 
            `<h3>${data.name}, ${data.sys.country}</h3>
             <p> Sunrise: ${sunrise}</p>
             <p> Sunset: ${sunset}</p>
             <p> Temperature: ${data.main.temp} °C</p>
             <p>Humidity: ${data.main.humidity}%</p>
             <p>Weather: ${data.weather[0].main}</p>
             <p>Weather: ${data.weather[0].description}</p>
             
             <img src="${iconUrl}" alt="weather icon">`;
        } 
        else {
            document.getElementById("result").innerHTML = " City Not Found";
        }

    } catch (error) {
        console.log(error);
    }
}