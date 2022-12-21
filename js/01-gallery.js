import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image"
                src ="${item.preview}" 
                data-source = "${item.original}" 
                alt="${item.description}"/>
            </a>
        </div>`,
  )
  .join('');

imageGallery.insertAdjacentHTML('beforeend', markup);

console.log(imageGallery);

imageGallery.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target);

  const instance = basicLightbox.create(`
    <div class="modal">
         <img src="${event.target.dataset.source}">
    </div>
`);

  instance.show();
}

imageGallery.removeEventListener('keydown', onEscKeyPress);

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
  }
}
