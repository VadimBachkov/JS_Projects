
const API_KEY = `3ef4ab9e`;

const API_URL = `https://www.omdbapi.com/`;

let page = 1;


let mostPopularDocument = document.querySelector(".most-popular");
let movieContainer = document.querySelector(".movie-container");
let modalContainer = document.querySelector(".modal-container");
let close = document.querySelector(".close");
let movieTitle = document.querySelector(".movie-title");
let movieDetail = document.querySelector(".movie-detail");
const movies = document.querySelector('#movies');




const inputField = document.querySelector(".entered-field");

inputField.addEventListener('click', () => {
    let movieName = inputField.value;
    if (movieName.trim() != 0) {
      return biuldMoviesContainer(results);
    } else return;
    
})


//when you click on the image box
movieContainer.addEventListener("click", (event) => {

    if (event.target.classList[0] == "movie-image") {

        let title = event.target.parentElement.children[2].children[0].innerText

        let overview = event.target.parentElement.children[0].value;

        movieTitle.innerHTML = title;
        movieDetail.innerHTML = overview;


        modalContainer.classList = "modal-container show";
    }

})


modalContainer.addEventListener("click", (event) => {

    if (event.target.classList[0] == "modal-container") {
        modalContainer.classList = "modal-container hide";
    }
})

// when you click close button
close.addEventListener("click", () => {
    modalContainer.classList = "modal-container hide";
})


function biuldMoviesContainer(result) {

    movies.style.display = "block";

    mostPopularDocument.innerHTML += `<div class="movie">
        
        <img class="movie-image" src="https://image.tmdb.org/t/p/w500$%7Bmovie${result.Poster}">
       <div class="info">
        <span class="movie-title">${result.Title}</span>
        
           <div class="counts">
            <div class="vote-average">
                <span>${result.ratings}</span>
            </div>
            <div class="release-date">
                <span>${result.released}</span>
            </div>
           
           </div>
        </div>
    </div>`

}


async function showMovie(movieName,page) {

    const request = await fetch(`${API_URL}?apiKey=${API_KEY}&s=${movieName}&page=${page}`);
   
    const results = await request.json();

    biuldMoviesContainer(results);
}

showMovie();