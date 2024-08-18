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

// calling the function to display the photographer card
displayPhotographerCard();

// MEDIA-CONTENT

// getting the photographer ID from the URL
function getPhotographerIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'), 10);
}

// fetching and displaying media content based on photographer ID
async function displayMediaContentByPhotographerId(photographerId) {
    try {
        const response = await fetch('./data/photographers.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const media = data.media.filter(item => item.photographerId === photographerId);
        displayMediaContent(media);
    } catch (error) {
        console.error('Error fetching media data:', error);
    }
}

// displaying media content
function displayMediaContent(media) {
    const mediaSection = document.querySelector('.media-content');
    mediaSection.innerHTML = ''; 
    media.forEach(item => {
        const mediaElement = createMediaElement(item);
        mediaSection.appendChild(mediaElement);
    });
}

// creating the media element (image or video)
function createMediaElement(item) {
    const mediaElement = document.createElement('div');
    mediaElement.className = 'media-item';

    if (item.image) {
        mediaElement.innerHTML = `
            <img src="assets/media/${item.image}" alt="${item.title}" data-title="${item.title}">
            <div class="media-info">
                <p>${item.title}</p>
                <p>${item.likes} <span class="heart-icon">♥</span></p>
            </div>
        `;
    } else if (item.video) {
        mediaElement.innerHTML = `
            <video controls>
                <source src="assets/media/${item.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="media-info">
                <p>${item.title}</p>
                <p>${item.likes} <span class="heart-icon">♥</span></p>
            </div>
        `;
    }

    return mediaElement;
}

// Function to apply a specific class based on the image title
function applyClassBasedOnTitle() {
    const images = document.querySelectorAll('img[data-title]');
    images.forEach(img => {
        const title = img.getAttribute('data-title');
        if (title === 'Fashion Yellow Beach' || title === 'Fashion Pattern on a Pattern' || title === 'Raw Black Portrait' || title === 'Jump!' || title === 'Fashion Wings' || title === 'Melody Red on Stripes' || title === 'Musical Festival Singer') {
            img.classList.add('top-position');
        }
    });
}

// getting the photographer ID from the URL and display the media content
const photographerId = getPhotographerIdFromUrl();
if (photographerId) {
    displayMediaContentByPhotographerId(photographerId).then(() => {
        applyClassBasedOnTitle(); // Apply the class after the media content is rendered
    });
} else {
    console.error('Photographer ID not found in the URL');
}