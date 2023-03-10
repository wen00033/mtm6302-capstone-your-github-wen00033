"use strict";
const pokemon = document.querySelector(".main-pokemon");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup-box");

const openPopup = function () {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
};

const closePopup = function () {
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
};

let list = [];

for (let i = 0; i < 40; i++) {
  list[i] = `<button class="pokemon">
    <img class="pokemon-pic" src="#" alt="icon">
    <h4 class="pokemon-name">${i}</h4>
</button>`;
  pokemon.innerHTML = list.join("");
  let pokemonList = document.querySelectorAll(".pokemon");
  for (let i = 0; i < pokemonList.length; i++) {
    pokemonList[i].addEventListener("click", openPopup);
    overlay.addEventListener("click", closePopup);
  }
}
