const scrollContainer = document.querySelector("html");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft -= evt.deltaY;
});

// const scrollContainer = document.querySelector(".index-container");
// const absoluteElements = document.querySelector("h2")

// scrollContainer.addEventListener("scroll", () => {
//   const scrollLeft = scrollContainer.scrollLeft;
//   for (let i = 0; i < absoluteElements.length; i++) {
//     const absoluteElement = absoluteElements[i];
//     absoluteElement.style.left = `${absoluteElement.offsetLeft - scrollLeft}px`;
//   }
// });
