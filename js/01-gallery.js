import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery  = document.querySelector('.gallery');



function createNewImageGallery() {
    
    const markup = galleryItems.map(item => 
        `<div class="gallery__item">
        <a href="${item.original}" class="gallery__link">
          <img class="gallery__image"
          scr ="${item.preview}" 
          data-source = "${item.original}" 
          alt="${item.description}">
        </a>
      </div>`).join('')
    
    imageGallery.insertAdjacentHTML('beforeend', markup)
   
}
createNewImageGallery()
console.log(imageGallery);

imageGallery.addEventListener('click', onClick);
function onClick(event) {
    preventDefault()
    console.dir(event.target)
    
}

