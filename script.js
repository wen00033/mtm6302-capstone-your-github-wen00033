"use strict";
const pokemon = document.querySelector(".main-pokemon");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup-box");
const popupContent = document.querySelector(".popup-content-detail");
const popupImage = document.querySelector(".popup-image-group");
const morePokemon = document.querySelector(".btn-pokemon-more");
const myPokemon = document.querySelector(".btn-pokemon-mine");
const buttonCatch = document.querySelector(".popup-button-catch");
const buttonRelease = document.querySelector(".popup-button-release");

buttonRelease.classList.add("hidden");

morePokemon.addEventListener("click", function () {
  buttonRelease.classList.add("hidden");
  buttonCatch.classList.remove("hidden");
});
myPokemon.addEventListener("click", function () {
  buttonCatch.classList.add("hidden");
  buttonRelease.classList.remove("hidden");
});

const openPopup = function () {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
};

const closePopup = function () {
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
  buttonCatch.disabled = false;
  buttonRelease.disabled = false;
};

//  -------------function for popups while click the certain pokemon-------------------------------

function displayPokemons(pokemons) {
  const pokemonList = [];
  for (const pokemon of pokemons.results) {
    pokemonList.push(`<button class="pokemon">
    <img class="pokemon-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseUrl(
      pokemon.url
    )}.png" alt="${parseUrl(pokemon.url)}" data-detail="${
      pokemon.url
    }" data-large="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseUrl(
      pokemon.url
    )}.png"
    data-name="${pokemon.name}">
    <h4 class="pokemon-name">${pokemon.name}</h4>
</button>`);
  }
  pokemon.innerHTML = pokemonList.join("");
  // ------------------popup data detail-------------------------
  let pokemonImg = document.querySelectorAll(".pokemon");
  for (const pokemonDetail of pokemonImg) {
    pokemonDetail.addEventListener("click", function (e) {
      if (
        e.target.classList.value == "pokemon-pic" &&
        buttonCatch.textContent == "catch!"
      ) {
        // button.textContent = "catch!";
        openPopup();
        console.log(e);
        popupImage.innerHTML = `<img src="${e.target.dataset.large}" class="popup-img" alt="pokemon-img" />
        <h3 class="popup-title popup-title-big">${e.target.dataset.name}</h3>`;

        // ------------function to retreiving data---------------------------

        function pokemondetail9(pokemon) {
          // console.log(pokemon);
          popupContent.innerHTML = `
      <h4 class="popup-title">type:${pokemon.types[0].type.name}<br></h4>
      <h4 class="popup-title">ability:${pokemon.abilities[0].ability.name}</h4>
      <h4 class="popup-title">height:${pokemon.height}</h4>`;
        }
        // ----------fetch the certain detail------------------------
        async function $pokemondetail9() {
          const response = await fetch(e.target.dataset.detail);
          const json = await response.json();
          pokemondetail9(json);
        }
        $pokemondetail9();
        // ----------------put data inside the local storage when click catch---------------
      }

      const myPokemonData = function () {
        buttonCatch.disabled = true;
        let myPokemonObject = {
          name: e.target.dataset.name,
          url: e.target.dataset.detail,
        };
        const localpokemon = JSON.stringify(myPokemonObject);
        localStorage.setItem(`mypokemon${i}`, localpokemon);
      };
      if (buttonCatch.textContent == "catch!") {
        buttonCatch.addEventListener("click", myPokemonData);
      }
    });
  }
  // --------------clcick outside of box and close-------------------------
  overlay.addEventListener("click", closePopup);
}

let i = 0;
const count1 = function () {
  i++;
  i < 99999;
  console.log(i);
};
buttonCatch.addEventListener("click", count1);
// ------------------20 pokemon generator------------------------

let count = 0;
morePokemon.addEventListener("click", async function pokemon1() {
  count += 20;
  document.querySelector(".header-title").textContent = `choose your pokemon!`;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${count}&limit=20`
  );
  const json = await response.json();
  displayPokemons(json);
});

async function pokemon1() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  );
  const json = await response.json();
  displayPokemons(json);
}
pokemon1();
// --------------This is my pokemon-------------------------------------------

// --------------parseURL function for images------------------------------------
function parseUrl(url) {
  return url.substring(
    url.substring(0, url.length - 2).lastIndexOf("/") + 1,
    url.length - 1
  );
}

// ------------------------------------------------------------------------------------
// -----------------------------
// let myObject = JSON.parse(localStorage.getItem("mypokemon1"));
// console.log(myObject);
const localPokemon5 = function () {
  buttonRelease.textContent = "release!";
  document.querySelector(".header-title").textContent = "Your pokemon!";
  let localList = [];
  for (let i = 1; i <= 99999; i++) {
    let myObject = JSON.parse(localStorage.getItem(`mypokemon${i}`));
    if (myObject !== null) {
      localList[i] = `<button class="pokemon">
      <img class="pokemon-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseUrl(
        myObject.url
      )}.png" alt="${parseUrl(myObject.url)}" data-detail="${
        myObject.url
      }" data-large="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseUrl(
        myObject.url
      )}.png"
      data-name="${myObject.name}"
      data-remove="mypokemon${i}">
      <h4 class="pokemon-name">${myObject.name}</h4>
  </button>`;
    }
  }

  pokemon.innerHTML = localList.join("");

  let pokemonImg = document.querySelectorAll(".pokemon");
  for (const pokemonDetail of pokemonImg) {
    pokemonDetail.addEventListener("click", function (e) {
      if (e.target.classList.value == "pokemon-pic") {
        openPopup();
        console.log(e);
        popupImage.innerHTML = `<img src="${e.target.dataset.large}" class="popup-img" alt="pokemon-img" />
          <h3 class="popup-title popup-title-big">${e.target.dataset.name}</h3>`;

        // ------------function to retreiving data---------------------------

        function pokemondetail6(pokemon) {
          popupContent.innerHTML = `
        <h4 class="popup-title">type:${pokemon.types[0].type.name}<br></h4>
        <h4 class="popup-title">ability:${pokemon.abilities[0].ability.name}</h4>
        <h4 class="popup-title">height:${pokemon.height}</h4>`;
        }
        // ----------fetch the certain detail------------------------
        async function $pokemondetail() {
          const response = await fetch(e.target.dataset.detail);
          const json = await response.json();
          pokemondetail6(json);
        }
        $pokemondetail();

        const releasePokemon = function () {
          if (buttonRelease.textContent == "release!") {
            let myLocalObject = e.target.dataset.remove;

            localStorage.removeItem(myLocalObject);
            buttonRelease.textContent = "release!";
            localPokemon5();
            closePopup();
          }
        };
        if (buttonRelease.textContent == "release!") {
          buttonRelease.addEventListener("click", releasePokemon);
        }
      }
    });
  }
};

myPokemon.addEventListener("click", localPokemon5);
