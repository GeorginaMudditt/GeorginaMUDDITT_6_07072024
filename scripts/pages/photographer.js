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

// calling the function to display the photographer card
displayPhotographerCard();

import {mediaFactory} from '../factories/photographer.js'

async function getMediaElements(id) {
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    return data.media.filter(media => media.photographerId === photographerId);
}

// Function to display photographer's media
async function displayPhotographerMedia() {
    const photographerId = extractPhotographerId(); // Function to extract photographer ID from URL
    const mediaData = await getMediaElements(photographerId);

    if (mediaData) {
        const mediaContainer = document.querySelector('.media-content'); 

        mediaData.forEach(mediaItem => {
            const media = mediaFactory(mediaItem);
            const mediaElement = media.getMediaElements(); // Call the method to get media elements

            mediaContainer.appendChild(mediaElement);
        });
    }
}

// calling the function to display the photographer media
displayPhotographerMedia();