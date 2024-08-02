export const photographerFactory = (data) => {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // creating elements
        const article = document.createElement('article'); 
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

    function getPhotographerCard() {
      // creating elements
      const section = document.createElement('section');
      const img = document.createElement('img');
      const h1 = document.createElement('h1');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const span = document.createElement('span');

      // populating elements
      img.setAttribute("src", picture);
      h1.textContent = name;
      h2.textContent = `${city}, ${country}`;
      p.textContent = tagline;
      span.textContent = `$${price}/day`;

      // ordering elements
      section.appendChild(img);
      section.appendChild(h1);
      section.appendChild(h2);
      section.appendChild(p);
      section.appendChild(span);

      return section;
    }

    return { getUserCardDOM, getPhotographerCard };
};


