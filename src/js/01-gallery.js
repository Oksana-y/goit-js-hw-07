import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
function createGalleryItems(items){
   const markup = items
    .map(({preview, original, description}) => {
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
    })
    .join("");
    return markup;
}

console.log(galleryItems);
gallery.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems)); 

gallery.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    
`);

instance.show();

}    

});

