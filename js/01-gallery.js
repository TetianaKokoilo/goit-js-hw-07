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

window.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target);

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscKeyPress);
        // instance.close();
      },
    },
    {
      onClose: () => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    },
  );

  instance.show();
}

function onEscKeyPress(event) {
  console.log(`esc`, event);
  if (event.key === 'Escape') {
    instance.close();
  }
  return 
}
