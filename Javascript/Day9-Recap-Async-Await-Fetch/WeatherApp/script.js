var weatherContainer=document.getElementById('weatherContainer')

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=68efa0885519a6f01d76917c463ada68


async function getWeatherData(){
    var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=68efa0885519a6f01d76917c463ada68`)
    let res=await data.json()
    console.log(res)


weatherContainer.innerHTML=`

 <div class="row g-0">
          <div class="col-md-4">
            <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Weather Update ${cityName}</h5>
              <p class="card-text m-0"><small class="text-muted">Humidity: ${res.main.humidity}</small></p>
              <p class="card-text m-0"><small class="text-muted">Wind Speed: ${res.wind.speed}</small></p>
              <p class="card-text m-0"><small class="text-muted">Temperature: ${res.main.temp}</small></p>
              <p class="card-text m-0"><small class="text-muted">Description: ${res.weather[0].description}</small></p>

            </div>
          </div>
        </div>
`

}
