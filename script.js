

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '98274d0f27msh07324ec0ee657a2p12ea08jsn33e571cf5e7c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)


            Cloud_pct.innerHTML = response.cloud_pct
            Humidity.innerHTML = response.humidity
            Humidity2.innerHTML = response.humidity
            Max_temp.innerHTML = response.max_temp
            Min_temp.innerHTML = response.min_temp
            Temp2.innerHTML = response.temp
            Wind_degress.innerHTML = response.wind_degrees  
            Wind_speed.innerHTML = response.wind_speed
            Wind_speed2.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err))

}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi");
