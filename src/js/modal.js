//------------------------------------------------------
// OPENING MODAL:

// Get the modal -> id of the modal structure on modal.html
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openModal = document.querySelectorAll('img');
const openImgModal = modal.querySelector('img');

// Create an array of images for the circle motion on arrow buttons
const projectImageSrcs = [];

// When the user clicks on the button(img), open the modal
openModal.forEach((item) => {
  const target = item.src;
  if (target !== '') {
    projectImageSrcs.push(target);
  }

  item.addEventListener('click', (e) => {
    const target = e.target.src;
    modal.style.display = 'block';
    openImgModal.setAttribute('src', target);
  });
});
//------------------------------------------------------

//------------------------------------------------------
// CLOSING MODAL:
// Get the <span> element that closes the modal
const spanClose = document.getElementsByClassName(
  'material-symbols-outlined--close'
)[0];
// When the user clicks on <span> (x), close the modal
spanClose.onclick = function () {
  modal.style.display = 'none';
};
//------------------------------------------------------

//------------------------------------------------------
// CAROUSEL OF IMAGES:
// Get the arrow buttons
const arrows = [];

const next = document.querySelector('.material-symbols-outlined--arrow_right');
arrows.push(next);

const previous = document.querySelectorAll(
  '.material-symbols-outlined--arrow_left'
);
arrows.push(...previous);

// When the user clicks on the arrow buttons, the image will change
arrows.forEach((item) => {
  item.addEventListener('click', (e) => {
    const target = e.target;
    const imageSrc = openImgModal.src;

    let currentIndex = projectImageSrcs.indexOf(imageSrc);

    if (target === next) {
      if (currentIndex === projectImageSrcs.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }

      openImgModal.setAttribute('src', projectImageSrcs[currentIndex]);
    }

    if (target === previous[0] || target === previous[1]) {
      if (currentIndex === 0) {
        currentIndex = projectImageSrcs.length - 1;
      } else {
        currentIndex = currentIndex - 1;
      }

      openImgModal.setAttribute('src', projectImageSrcs[currentIndex]);
    }
  });
});
//------------------------------------------------------
