// importing the necessary factory functions
import {photographerFactory} from '../factories/photographer.js'
import {mediaFactory} from '../factories/media.js'

// extracting the photographers' IDs
function extractPhotographerId() { 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const photographerId = urlParams.get('id');
    return photographerId; 
}
// PHOTOGRAPH-HEADER

// fetching the photographers' data from the JSON file for the photograh-header section
async function getPhotographerData(id) {
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    const photographer = data.photographers.find(photographer => photographer.id === parseInt(id));
    const media = data.media.filter(item => item.photographerId === parseInt(id));
    return { photographer, media };
}   

// displaying the photographers' data in the photograph-header section
async function displayPhotographerCard() {
    const photographerId = extractPhotographerId();
    const { photographer, media } = await getPhotographerData(photographerId);

    if (photographer) {
        const photographerInstance = photographerFactory(photographer);
        const photographerCard = photographerInstance.getPhotographerCard();
        
// appending the card to the DOM
        document.querySelector('.photograph-header .text-container').appendChild(photographerCard);
    }
}

// MEDIA-CONTENT - BACK TO THIS SECTION SUNDAY

// displaying media content
function displayMediaContent(media) {
    const mediaSection = document.querySelector('.media-content');
    media.forEach(item => {
        const mediaElement = createMediaElement(item);
        mediaSection.appendChild(mediaElement);
    });
}

// Example function to create a media element
function createMediaElement(item) {
    const mediaElement = document.createElement('div');
    mediaElement.className = 'media-item';
    // Add more elements and attributes to the mediaElement as needed
    mediaElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <p>${item.title}</p>
    `;
    return mediaElement;
}

// calling the function to display the photographer card
displayPhotographerCard();



async function getMediaData() {
    try {
        const response = await fetch('./data/photographers.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error fetching media:', error);
        return [];
    }
}

// filtering media by photographerId
function filterMediaByPhotographerId(media, photographerId) {
    return media.filter(mediaItem => mediaItem.photographerId === photographerId);
}

// displaying the media elements

async function displayMedia() {
    const media = await getMediaData();
    const photographerId = extractPhotographerId();
    const filteredMedia = filterMediaByPhotographerId(media, parseInt(photographerId));
    displayMediaContent(filteredMedia);

    if (!mediaContent) {
        console.error('No media content found');
        return;
    }

    filteredMedia.forEach(mediaElement => {
        const mediaCard = mediaFactory(mediaElement);
        const mediaCardDOM = mediaCard.getMediaCard();
        mediaContent.appendChild(mediaCardDOM);
    });
}

// calling the function to display the media elements
displayMedia();

// // populating media content section
    // if (media) {
    //     displayMediaContent(media);
    // }