import { galleryItems } from './gallery-items.js';

// Change code below this line

const listEl = document.querySelector('.gallery');

createGalleryItems(galleryItems);

listEl.addEventListener('click', onClick);

let instance;

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const originalImg = evt.target.dataset.source;

  createModal(originalImg);
}

function createModal(path) {
  instance = basicLightbox.create(`<img src="${path}" >`, {
    onShow: () => {
      document.addEventListener('keydown', handleKeyDown);
    },
    onClose: () => {
      document.removeEventListener('keydown', handleKeyDown);
    },
  });
  instance.show();
}

function handleKeyDown(evt) {
  if (evt.code === 'Escape' && instance.visible()) {
    instance.close();
  }
}

function markupGalleryItem({ preview, original, description }) {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
}

function createGalleryItems(arr) {
  const galleryElements = arr.map(markupGalleryItem).join('');

  listEl.innerHTML = galleryElements;
}
