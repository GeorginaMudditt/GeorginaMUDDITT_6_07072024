// // Factory function to create media elements

// export const mediaFactory = async (media) => {
//     const { title, image, video: videoSrc, likes, photographerId } = media;

//     function getMediaElements() { 
//         // creating a container for media elements
//         const mediaElement = document.createElement('div');
//         mediaElement.classList.add('media-item');
//         mediaElement.dataset.photographerId = photographerId;

//         // creating elements
//         const img = document.createElement('img');
//         const video = document.createElement('video');
//         const mediaTitle = document.createElement('h3');
//         const mediaLikes = document.createElement('p');

//         // populating elements
//         if (image) {
//             img.src = `assets/${image}`;
//             img.alt = title;
//             mediaElement.appendChild(img);
//         } else if (videoSrc) {
//             video.src = `assets/${videoSrc}`;
//             video.alt = title;
//             mediaElement.appendChild(video);
//         }
        
//         mediaTitle.textContent = title;
//         mediaLikes.textContent = `Likes: ${likes}`;

//         // appending elements to containers
//         mediaElement.appendChild(mediaTitle);
//         mediaElement.appendChild(mediaLikes);
        
//         return mediaElement;
//     }

//     return getMediaElements();
// };
