// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");


const galleryCard = createGalleryMarkup(galleryItems);
galleryListEl.insertAdjacentHTML("beforeend", galleryCard);

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }).join('');

}

new SimpleLightbox('.gallery__link', {

    captionsDelay: 250,
  captionsData: "alt",
 
});