// Get the modal -> id of the modal structure on modal.html
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModal = document.querySelectorAll("img");
const openImgModal = document.getElementById("image");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button(img), open the modal
openModal.forEach((item) => {
  console.log({ item });
  item.addEventListener("click", (e) => {
    const target = e.target.src;
    console.log({ target });

    modal.style.display = "block";
    openImgModal.setAttribute("src", target);
  });
});

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
