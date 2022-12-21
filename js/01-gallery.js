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
        </div>`).join('');

  imageGallery.insertAdjacentHTML('beforeend', markup);


console.log(imageGallery);

imageGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault()

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target);
//   const instance = basicLightbox.create(`
// 	  <img src="url" width="800" height="600">
// `);
//   instance.show();
    const instance = basicLightbox.create(`
    <div class="modal">
         <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
    </div>
`)

instance.show()
}

console.log(onClick);
