// https://api.covid19api.com/summary
let url=`https://api.covid19api.com/summary`

// https://restcountries.com/v3.1/name/{name}

//mapbox




async function updateMap(){
    let data=await fetch(url)
    let res=await data.json()
    // console.log(res.Countries)

    let list=res.Countries;

    list.map(async function(element){
        console.log(element)
        // console.log(element.Country)
        let data1=await fetch(`https://restcountries.com/v3.1/name/${element.Country}`)
        let res1=await data1.json()
        // console.log(res1)

        let latitude=res1[0].latlng[0]
        let longitude=res1[0].latlng[1]
        console.log(latitude,longitude)


        let cases=element.TotalDeaths
        if(cases>255){
            color="rgb(255,0,0)"
        }
        else if(cases>100 && cases<255){
            color="rgb(197, 62, 56)"
        }
        else{
            color=`rgb(${element.TotalDeaths},0,0)`
        }

        // Mark on the map/globe

        new mapboxgl.Marker({
            draggable: false,
            color:color

            })
            .setLngLat([longitude, latitude])
            .addTo(map);
     })
}
updateMap()

let interval=9000
setInterval(updateMap,interval)





