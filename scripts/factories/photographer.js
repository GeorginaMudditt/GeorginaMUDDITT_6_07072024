export const photographerFactory = (data) => {
    const { name, portrait, city, country } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // creation part
        const article = document.createElement( 'article' ); // <article></article>
        const img = document.createElement( 'img' );
        const p = document.createElement('p') // <p></p>

        // populate part
        img.setAttribute("src", picture) // <image src=picture />
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        p.textContent = `${city}, ${country}`


        // ordering part
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p)

        return (article);

        
    }

    return { name, picture, getUserCardDOM }
}