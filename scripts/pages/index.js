import {photographerFactory} from '../factories/photographer.js'

async function getPhotographers() {
    try {
        const response = await fetch('./data/photographers.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return ({
            photographers: [...data.photographers]
        });

    } catch (error) {
        console.error("Error fetching photographers:", error);
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM(); // html card
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Retreive photographer data
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
    