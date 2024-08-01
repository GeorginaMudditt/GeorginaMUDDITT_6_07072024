export const photographerFactory = (data) => {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // creating elements
        const article = document.createElement( 'article' ); 
        const img = document.createElement('img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');
        const link = document.createElement('a');

        // populating elements
        img.setAttribute("src", picture)
        link.setAttribute("href", `photographer.html?id=${id}`);
        h2.textContent = name;
        h3.textContent = `${city}, ${country}`
        h4.textContent = tagline;
        h5.textContent = `$${price}/day`;

        // ordering elements
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);

        // wrapping article with link
        link.appendChild(article);

        return link; 
    }
    return { name, picture, getUserCardDOM }
}

// parsing the URL and extracting the photographers' IDs
function extractPhotographerId() { 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('id');

return photographerId;
}

// Please HELP with code below - I am completely stuck on this step

// fetching photographer data from the JSON file
async function fetchPhotographerData() {
  const response = await fetch('./data/photographers.json'); //this is the correct path, right?
  const data = await response.json();
  return data.photographers;
}

// displaying the photographer's data
async function displayPhotographerData() {
  const photographerId = extractPhotographerId();
  const photographers = await fetchPhotographerData();
  const photographer = photographers.find(p => p.id === photographerId);

  if (photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    const photographerName = document.createElement('h1');
    photographerName.textContent = photographer.name;

    const photographerPhoto = document.createElement('img');
    photographerPhoto.src = photographer.portrait;
    photographerPhoto.alt = photographer.name;

    photographHeader.appendChild(photographerName);
    photographHeader.appendChild(photographerPhoto);
    } else {
      console.error('Photographer not found');
    }
}

// calling the function to display the photographer's data when the page loads
document.addEventListener('DOMContentLoaded', displayPhotographerData);