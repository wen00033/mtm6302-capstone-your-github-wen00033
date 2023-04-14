# mtm6302-capstone-your-github-wen00033

1. How to achieve pokedex?

The deafault 20 pokemon:
Use orignal link to generate the first 20 pokemon as default

Generate 20 pokedex each time:
In order to generate 20 pokedex have get the json link :
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20
If we look closer, you will see each page of pokemon just add 20 to the previous link
so creat an event listentner add 20 when user click.
Put as "count" for url and each time user click would fetch new url.
click addeventlistener override the default 20 pokemon.

pokemon pictures and data:
display pokemon use a function. and use for of to list individual object in an arrary.
use for... of loop to create a html join to a div and use style to make it to a grid.
Using the parseUrl function to generate pokemon number 1.2.3...ect
put the large picture into data-large
put the pokemon name into data-name
put the pokemon url into data-detail

use pokemon data by addeventlistener:
Each pokemon I create is an button. Let click event only target to image, and retreive data by clicking, and the detail of pokemon would join inside popup.
When user click the certain button. When click which button would open a popup.

Get the data:
Use second fetch function fetch the individual pokemon url from data-detail.
and join the data into popup content.

store localstorage:
create function to store the certain pokemon detail inside a object.
let myPokemonObject = {
name: e.target.dataset.name,
url: e.target.dataset.detail,
};
prevent user click more than 2 times. Once click it disable catch button.
Turn off overlay reactivate.
Use a addon number fuction at global scope. click it add 1, which would set individual object to a new one.

get data from localstorage:
because the key data I store in localstorage would be pokemon1 to pokemon99999
using for loop to target not null value and print out all the store pokemon in localstorage. And use the previous method to print out the images and detail.
This time add a new data call pokemon[i] to get the current pokemon localstorage key, which use for remove the pokemon in local storage.

remove pokemon from localstorage:
use the key I set in data to remove certain pokemon and and reload the function again.

-------------------resources-------------------------------------
javascript from IMD, some stackoverflow

-------------------challenges----------------------------
localstorage can not get the certain item because different scope.
object return null
The poekmon can't retieve data.
