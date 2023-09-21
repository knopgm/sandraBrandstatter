// Get the modal -> id of the modal structure on modal.html
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModal = document.querySelectorAll("img");
const openImgModal = modal.querySelector("img");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Create an array of images for the circle motion on arrow buttons
console.log({ openModal });
const projectImages = [];

// When the user clicks on the button(img), open the modal
openModal.forEach((item) => {
  const target = item.src;
  if (target !== "") {
    projectImages.push(target);
  }

  item.addEventListener("click", (e) => {
    const target = e.target.src;
    console.log({ target });
    modal.style.display = "block";
    openImgModal.setAttribute("src", target);
  });
});

console.log({ projectImages });
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Get the arrow buttons
const arrows = document.getElementsByClassName("arrow");
console.log({ arrows });

const next = document.querySelectorAll("arrow right");
console.log({ next });

const previous = document.querySelectorAll("arrow left");
console.log({ previous });

// When the user clicks on the arrow buttons, the image will change
[...arrows].forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    console.log({ target });
    const imageSrc = openImgModal.src;

    let currentIndex = projectImages.indexOf(imageSrc);
    console.log({ currentIndex });

    if (target === arrow_right) {
      console.log("right");
      if (currentIndex === projectImages.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }

      console.log({ currentIndex });
      openImgModal.setAttribute("src", projectImages[currentIndex]);
    }

    if (target === arrow_left) {
      console.log("left");
      if (currentIndex === 0) {
        currentIndex = projectImages.length - 1;
      } else {
        currentIndex = currentIndex - 1;
      }
      console.log({ currentIndex });
      openImgModal.setAttribute("src", projectImages[currentIndex]);
    }
  });
});
