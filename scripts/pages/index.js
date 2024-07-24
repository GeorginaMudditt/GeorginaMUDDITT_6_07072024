// This function fetches the data from the JSON file. If an error occurs, it logs the error to the console.  

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

// This function generates and displays the cards for each photographer

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();


  
