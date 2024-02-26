let inputEl = document.querySelector(".input-el");
let inputBtn = document.querySelector(".inputBtn");
let cards = document.querySelector(".cards");
let modal = document.querySelector(".modal");
let allmovies;
let api = "https://api.tvmaze.com/shows";

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    renderMovies(data);
    allmovies = data;
  });

function renderMovies(data) {
  cards.innerHTML = "";
  data.forEach(
    (movie) =>
      (cards.innerHTML += `
        <div class="card" style="width: 19rem">
          <img
            src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body d-flex justify-content-between">
            <a href="" class="btn btn-success">Go To Website</a>
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
