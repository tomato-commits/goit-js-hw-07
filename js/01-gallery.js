import { galleryItems } from './gallery-items.js';

// 1. Create and render picture gallery
const gallery = document.querySelector('.gallery');

createGalleryItems();

function createGalleryItems() {
    const markup = galleryItems
        .map((image) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${image.original}">
                    <img
                        class="gallery__image"
                        src="${image.preview}"
                        data-source="${image.original}"
                        alt="${image.description}"
                    />
                </a>
            </div>
            `;
         })
        .join('');
    
    gallery.insertAdjacentHTML("beforeend", markup);
}
