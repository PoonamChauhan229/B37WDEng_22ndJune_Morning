// https://api.themoviedb.org/3/movie/550?api_key=9ccfb971e2a6651bed5113fb46e7f431
// /discover/movie?sort_by=popularity.desc

let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ccfb971e2a6651bed5113fb46e7f431"

let imgUrl="https://image.tmdb.org/t/p/w1280"

let searchUrl="https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=9ccfb971e2a6651bed5113fb46e7f431&query="

// Get Movies
getMovieData(url)

async function getMovieData(url){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    console.log(res.results)
    showMovies(res.results)
   

}

var mainMovieDiv=document.getElementById('mainMovieDiv')
function showMovies(movies){
    mainMovieDiv.innerHTML=""
    movies.map((element)=>{
        var movieDiv=document.createElement('div')
        movieDiv.classList.add('col','movie')
        console.log(element)

        movieDiv.innerHTML=`
        <div class="card h-100">
                <img src=${imgUrl+element.backdrop_path} class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="w-100 card-title me-3">${element.original_title}</h5>
                        <h6 class="p-1 w-auto"><span class='${getClassByRate(element.vote_average)}'>${element.vote_average}</span></h6>
                    </div>

                    <!-- overview -->
                    <div class="card card-header overview">
                        <p>Overview</p>
                        <p>${element.overview}
                        </p>
                      </div>
                
                </div>
              </div>`
        mainMovieDiv.append(movieDiv)

    })
}

// search
const form=document.getElementById('form')
const search=document.getElementById('search')//input

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchTerm=search.value
    console.log(searchTerm)
    console.log(searchUrl+searchTerm)
    if(searchTerm &&  searchTerm.value!==""){
        getMovieData(searchUrl+searchTerm)
    }
    else{
        window.location.reload()
    }
    
})
// rating/Vote Color

// function 

function getClassByRate(vote){
    if(vote>8){
        return "green"
    }
    else if(vote>=5){
        return "orange"
    }
    else{
        return "red"
    }
}









