import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';


const dogListContainer = document.getElementById('dog-list-container');

// on load
async function loadData() {
    const dogs = await getDogs();
    console.log(dogs);
    //const dogListContainer = document.getElementById('dogs');

    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);

    }
    
    // fetch all dogs
    // render and append all dog cards to the container
}
loadData();