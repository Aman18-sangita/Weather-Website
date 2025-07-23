function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a City name.");
    return;
  }

  const apiKey = "ccbeeb13fcf844bf90e165049252107"; //Your API key
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Weather not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temp").textContent = data.current.temp_c;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("icon").src = "https:" + data.current.condition.icon;
      document.getElementById("aqi").textContent = data.current.air_quality.pm2_5.toFixed(2) + " PM2.5";
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Could not fetch weather. Check city name.");
    });
}
