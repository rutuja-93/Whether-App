async function getWeatherData() {
    const apiKey = "1e98f1eeee4e29a0a740b5cc2630cf5f"; // Replace with your key
    const city = document.getElementById("city-input").value;
  
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
  
    try {
      const res = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
      const data = await res.json();
  
      if (data.error) {
        alert("City not found!");
        return;
      }
  
      // Update the HTML with weather info
      document.getElementById("city-name").innerText = `City: ${data.location.name}`;
      document.getElementById("temperature").innerText = `${data.current.temperature} °C`;
      document.getElementById("description").innerText = data.current.weather_descriptions[0];
      document.getElementById("humidity").innerText = `${data.current.humidity}%`;
      document.getElementById("wind").innerText = `${data.current.wind_speed} km/h`;
  
    } catch (err) {
      console.error(err);
      alert("Something went wrong while fetching data.");
    }
  }
  