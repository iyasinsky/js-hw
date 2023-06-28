import { galleryItems } from './gallery-items.js';

// Change code below this line

const listEl = document.querySelector('.gallery');

createGalleryItems(galleryItems);

listEl.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const originalImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${originalImg}" >`);
  instance.show();

  document.addEventListener('keydown', evt => handleKeyDown(evt, instance));
}

function handleKeyDown(evt, instance) {
  if (evt.code === 'Escape' && instance.visible()) {
    console.log('The Escape key was pressed');
    instance.close();
    document.removeEventListener('keydown', handleKeyDown);
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

  // // елемент в який буду рендерити пустий, тому використовую innerHTML замість insertAdjacentHTML
  listEl.innerHTML = galleryElements;
}
