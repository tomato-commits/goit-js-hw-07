import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.addEventListener("click", onImageClick);
createGalleryItems();

// 1. Create and render picture gallery
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

// 2. Gallery delegation
function onImageClick(event) {
    // prevent link from opening
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const imgSource = event.target.dataset.source;
}
