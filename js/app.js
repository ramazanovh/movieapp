let inputEl = document.querySelector(".input-el");
let inputBtn = document.querySelector(".inputBtn");
let cards = document.querySelector(".cards");
let modal = document.querySelector(".modal");
let allmovies;
let api = "https://api.tvmaze.com/shows";
let paginationCount = 0;
fetch(api)
  .then((res) => res.json())
  .then((data) => {
    renderMovies(data);
    allmovies = data;
  });

function renderMovies(data) {
  cards.innerHTML = "";
  data.slice(0, 20).forEach(
    (movie) =>
      (cards.innerHTML += `
        <div class="card" style="width: 19rem">
          <img
            src="${movie.image.medium}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fs-4">${movie.name}</h5>
            <span>Premiere ${movie.premiered}</span>
             
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">IMDB Rating: ${movie.rating.average} </li>
            <li class="list-group-item">Genre: ${movie.genres[0]} </li>
            <li class="list-group-item">Language: ${movie.language}</li>
          </ul>
          <div class="card-body d-flex justify-content-between">
            <a href="${movie.officialSite}" class="btn btn-success">Go To Website</a>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Go To Detail
            </button>
          </div>
        </div>
        `)
  );
}
