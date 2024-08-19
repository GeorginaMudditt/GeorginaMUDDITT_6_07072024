
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
    document.querySelector('.photograph-header').classList.add('blurred-background');
    document.querySelector('.media-content').classList.add('blurred-background');
    document.querySelector('.likes-box').classList.add('blurred-background');
    document.querySelector('.logo').classList.add('blurred-background');
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.querySelector('.photograph-header').classList.remove('blurred-background');
    document.querySelector('.media-content').classList.remove('blurred-background');
    document.querySelector('.likes-box').classList.remove('blurred-background');
    document.querySelector('.logo').classList.remove('blurred-background');
}

function handleContactFormLabelClick() {
    displayModal();
}

document.getElementById('contactFormLabel').addEventListener('click', handleContactFormLabelClick);

// calling the functions
displayModal();
closeModal();

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
      contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        closeModal();
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.style.display = 'block';
        document.querySelector('.photograph-header').classList.add('blurred-background');
        document.querySelector('.media-content').classList.add('blurred-background');
        document.querySelector('.likes-box').classList.add('blurred-background');
        document.querySelector('.logo').classList.add('blurred-background');
      });
    }

    const closeIcon = document.querySelector('.close-icon');
    if (closeIcon) {
      closeIcon.addEventListener('click', function() {
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.style.display = 'none';
        document.querySelector('.photograph-header').classList.remove('blurred-background');
        document.querySelector('.media-content').classList.remove('blurred-background');
        document.querySelector('.likes-box').classList.remove('blurred-background');
        document.querySelector('.logo').classList.remove('blurred-background');
      });
    }
});