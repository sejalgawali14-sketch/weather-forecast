const city = document.querySelector("#city");
const region = document.querySelector("#region");
const country = document.querySelector("#country");
const wind = document.querySelector("#wind");
const windDirection = document.querySelector("#wind-direction");
const airPressure = document.querySelector("#air-pressure");
const humidity = document.querySelector("#humidity");
const temp = document.getElementById("temp")
const status = document.querySelector("#status")
const time = document.getElementById("time")

console.log();

// city.innerHTML="amravati"
function getWeather(){
    const cityName = document.getElementById("locationName").value;
    console.log(cityName);
    fetch(`https://api.weatherapi.com/v1/current.json?key=775607beac01499d9b9130530240205&q=${cityName}&aqi=no`)
    .then(res=> res.json())
    .then(data=> {         

    city.innerHTML = data.location.name+","
    region.innerHTML = data.location.region+","
    country.innerHTML = data.location.country
    humidity.innerHTML = data.current.humidity+" %"
    wind.innerHTML = data.current.wind_kph+" kph"
    windDirection.innerHTML = data.current.wind_dir
    airPressure.innerHTML = data.current.pressure_mb+" mb"
    temp.innerHTML=data.current.temp_c+" °C"
    status.innerHTML=data.current.condition.text
    time.innerHTML=data.location.localtime+" "+data.location.tz_id



    console.log(data)
})
.catch(err=> {
    console.log(err);
    // alert("pls enter correct location name")
})
}