"use strict";

const pokemon = document.querySelector(".main-pokemon");

let list = [];

for (let i = 0; i < 40; i++) {
  list[i] = `<div class="pokemon">
    <img class="pokemon-pic" src="#" alt="icon">
    <h4 class="pokemon-name">${i}</h4>
</div>`;
  pokemon.innerHTML = list.join("");
}
