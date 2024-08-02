// parsing the URL and extracting the photographers' IDs
function extractPhotographerId() { 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const photographerId = urlParams.get('id');
    
    return photographerId; 
}

import {photographerFactory} from '../factories/photographer.js'
    
async function getPhotographerData(id) {
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    return data.photographers.find(photographer => photographer.id === parseInt(id));
}   

async function displayPhotographerCard() {
    const photographerId = extractPhotographerId();
    const photographerData = await getPhotographerData(photographerId);

    if (photographerData) {
        const photographer = photographerFactory(photographerData);
        const photographerCard = photographer.getPhotographerCard();
        
        // Append the card to the DOM
        document.querySelector('.photograph-header').appendChild(photographerCard);
    }
}

// Call the function to display the photographer card
displayPhotographerCard();