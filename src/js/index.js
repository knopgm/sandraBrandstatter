// Target all fade-in-bottom elements
const scrollElements = document.querySelectorAll(".fade-in-bottom");

console.log(scrollElements);

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  console.log("add");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
  console.log("remove");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

handleScrollAnimation();
