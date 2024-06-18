const apiKey = "52cbc68e62f0999e2a96759c46efe270";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(URL + city + `&appid=${apiKey}`)
  let data = await response.json();
  console.log(data);

  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = data.main.temp + "°C";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + "km/h";

  if(data.weather[0].main === "Clouds") {
    weatherIcon.src = "clouds.png"
  } 
  else if(data.weather[0].main === "Clear") {
    weatherIcon.src = "clear.png"
  }
  else if(data.weather[0].main === "rain") {
    weatherIcon.src = "rain.png"
  }
  else if(data.weather[0].main === "drizzle") {
    weatherIcon.src = "drizzle.png"
  }
  else if(data.weather[0].main === "mist") {
    weatherIcon.src = "mist.png"
  }

}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

