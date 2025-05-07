let movieParent=document.querySelector('.movie')
let apiurl;
let getMovies=(search='')=>{
     if (search == '') {
        apiurl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
    } else {
        apiurl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
    }
    fetch(apiurl)
    .then((res)=>res.json())
    .then((finalres)=>{
     let movieCard =''
      let data=finalres.results
   data.forEach((item)=>{
      movieCard+=`
      <div class="movie-card">
            <img src="https://image.tmdb.org/t/p/w1280${item.poster_path}" 
                 alt="The Shawshank Redemption" 
                 class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${item.title}</h3>
                <div class="movie-meta">
                    <span>${item.release_date}</span>
                    <span>⭐&nbsp;${item.vote_average}</span>
                </div>
                <p class="movie-description">
                   ${item.overview}
                </p>
                <button class="watch-btn">Watch Now</button>
            </div>
        </div>  `
    
   })
   movieParent.innerHTML=movieCard
    })
    .catch((error)=>{console.log(error);
    })
    }
    
    getMovies()




    // https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=mission

    let searchInput=document.querySelector('.search-bar input')
    searchInput.addEventListener('keyup',(e)=>{
        let inputValue=e.target.value
        console.log(inputValue);
             getMovies(inputValue)
        
    })