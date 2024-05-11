const apiKey = "a3b1e329bcb2e58288442a9730dc0508";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.
    humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}
searchbtn.addEventListener("click" , ()=>{
    checkWeather(searchbox.value);
})
