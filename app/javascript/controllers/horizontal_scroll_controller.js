import { Controller } from "@hotwired/stimulus"

const scrollContainer = document.querySelector("html");


function updateFirstLetter(animeList, firstLetterElement) {
  // Iterate over each anime element in the list
  for (let i = 0; i < animeList.children.length; i++) {
    const animeElement = animeList.children[i];
    const animeRect = animeElement.getBoundingClientRect();
    // Check if the anime element is visible on the screen
    if (animeRect.left >= 0 && animeRect.right <= window.innerWidth) {
      // Extract the first letter from the anime title and update the first letter element
      const currentAnime = animeElement.children[0].innerText;
      const firstLetter = currentAnime.charAt(0);
      firstLetterElement.innerText = firstLetter;
      // Exit the loop once we've found the visible anime element
      break;
    }
  }
}

function infiniteScroll(animeList) {
  const containerWidth = scrollContainer.offsetWidth;
  const contentWidth = scrollContainer.scrollWidth;
  const scrollLeft = scrollContainer.scrollLeft;

  if (scrollLeft + containerWidth >= contentWidth) {
    const firstItem = animeList.firstChild;
    animeList.appendChild(firstItem.cloneNode(true));
    animeList.removeChild(firstItem);
    scrollContainer.scrollLeft -= containerWidth;
  }
}

// Connects to data-controller="horizontal-scroll"
export default class extends Controller {
  static targets = ['animeList', 'firstLetter']
  connect() {
    if (window.innerWidth > 767) {
      scrollContainer.addEventListener("wheel", (evt) => {
        scrollContainer.scrollLeft += evt.deltaY;
        updateFirstLetter(this.animeListTarget, this.firstLetterTarget);
      });

      scrollContainer.addEventListener("scroll", (evt) => {
        infiniteScroll(this.animeListTarget);
      });
    }
  }
}
