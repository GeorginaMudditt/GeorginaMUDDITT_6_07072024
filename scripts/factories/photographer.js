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
      // selecting existing elements
      const textContainer = document.querySelector('.text-container');
      const imgContainer = document.querySelector('.img-container');
    
      // creating elements
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
      const h4 = document.createElement('h4');
      
      // populating elements
      img.setAttribute("src", picture);
      h2.textContent = name;
      h3.textContent = `${city}, ${country}`;
      h4.textContent = tagline;
    
      // appending elements to containers
      textContainer.appendChild(h2);
      textContainer.appendChild(h3);
      textContainer.appendChild(h4);
      imgContainer.appendChild(img);
    }

    return { getUserCardDOM, getPhotographerCard };
};

// Factory function to create media elements

export const mediaFactory = (media) => {
    const { title, image, videoSrc, likes, id } = media;

    function getMediaElements() { 
     // creating a container for media elements
     const mediaElement = document.createElement('div');
     mediaElement.classList.add('media-item');

     // creating elements
     const img = document.createElement('img');
     const video = document.createElement('video');
     const mediaTitle = document.createElement('h3');
     const mediaLikes = document.createElement('p');

     // populating elements
     img.src = `assets/${image}`;
     img.alt = title;
     video.src = `assets/${videoSrc}`;
     video.alt = title;
     mediaTitle.textContent = title;
     mediaLikes.textContent = `Likes: ${likes}`;

     // appending elements to containers
     mediaElement.appendChild(img);
     mediaElement.appendChild(video);
     mediaElement.appendChild(mediaTitle);
     mediaElement.appendChild(mediaLikes);
    }

    return getMediaElements();
};
