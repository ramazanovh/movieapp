let inputEl = document.querySelector(".input-el");
let inputBtn = document.querySelector(".inputBtn");
let cards = document.querySelector(".cards");
let modal = document.querySelector(".modal");
let allmovies;
let api = "https://api.tvmaze.com/shows";

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    allmovies = data;
  });
