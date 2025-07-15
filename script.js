async function getWeatherData() {
  const apiKey = "1e98f1eeee4e29a0a740b5cc2630cf5f";
  const city = document.getElementById("city-input").value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const res = await fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
    const data = await res.json();

    if (data.error) {
      alert("City not found!");
      return;
    }

    // Fill in weather data
    document.getElementById("city-name").innerText = `City: ${data.location.name}`;
    document.getElementById("temperature").innerText = `${data.current.temperature} °C`;
    document.getElementById("description").innerText = data.current.weather_descriptions[0];
    document.getElementById("humidity").innerText = `${data.current.humidity}%`;
    document.getElementById("wind").innerText = `${data.current.wind_speed} km/h`;

    // Show the result box
    document.querySelector(".result").style.display = "block";

  } catch (err) {
    console.error(err);
    alert("Something went wrong while fetching data.");
  }
}

// Hide result on page load
window.onload = () => {
  document.querySelector(".result").style.display = "none";
};
