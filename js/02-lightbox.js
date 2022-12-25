import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`,
  )
  .join('');

newGallery.insertAdjacentHTML('beforeend', markup);

console.log(newGallery);


new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,

});