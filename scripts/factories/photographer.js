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

function extractPhotographerId() {
    // parse the URL and extract the photographers' IDs
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('id');

return photographerId;
}

