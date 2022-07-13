var weatherContainer=document.getElementById('weatherContainer')

// https://api.covid19api.com/dayone/country/india

async function getData(){
    var countryName=document.getElementById('cityName').value
    console.log(countryName)
    let data=await fetch(`https://api.covid19api.com/dayone/country/${countryName}`)
    let res=await data.json()
    console.log(res)


weatherContainer.innerHTML=`

 <div class="row g-0">
          <div class="col-md-4">
            <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-507979,resizemode-1,msid-81937810/news/company/corporate-trends/big-deals-no-more-a-big-deal/1.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Covid Update ${res[0].Country}</h5>
              <p class="card-text m-0"><small class="text-muted">Confirmed Cases: ${res[0].Confirmed}</small></p>
              <p class="card-text m-0"><small class="text-muted">Recovered Cases:  ${res[0].Recovered}</small></p>
              
              <p class="card-text m-0"><small class="text-muted">Death Cases: ${res[0].Deaths}</small></p>

              <p class="card-text m-0"><small class="text-muted">Country Code: ${res[0].CountryCode}</small></p>

            </div>
          </div>
        </div>
`

}
