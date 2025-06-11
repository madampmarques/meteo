function refreshweather(response) {
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);
    let cityElement= document.querySelector("#weather-app-city");
    cityElement.innerHTML= response.data.city;
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