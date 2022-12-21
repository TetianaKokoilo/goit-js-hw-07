import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
  )
  .join('');

newGallery.insertAdjacentHTML('beforeend', markup);

console.log(newGallery);

newGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault()

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(event.target);
}


new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,

});