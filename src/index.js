function refreshweather(response) {
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);
    let cityElement= document.querySelector("#weather-app-city");
    cityElement.innerHTML= response.data.city;
    let descriptionElement= document.querySelector("#description");
    descriptionElement.innerHTML= response.data.condition.description;
    let humidityElement= document.querySelector("#Humidity");
    humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
    let windspeedElement= document.querySelector("#wind-speed");
    windspeedElement.innerHTML= `${response.data.wind.speed}km/h`;
    let timeElement=document.querySelector("#time");
    timeElement.innerHTML=formatDate(date);
    let date=new Date(response.data.time * 1000);
    let iconElement=document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
function searchcity(city) {
    let apikey="82fa38deb37ad503o252e0t1394ccc8f";
    let apiurl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(refreshweather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput=document.querySelector("search-form-input");
    searchcity(searchInput.value);

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);
searchcity("Lisbon");