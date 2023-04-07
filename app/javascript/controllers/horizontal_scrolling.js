const scrollContainer = document.querySelector("html");
const animeList = document.querySelector('.index-content');
const firstLetterElement = document.getElementById('first-letter');

function updateFirstLetter() {
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

function infiniteScroll() {
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

scrollContainer.addEventListener("wheel", (evt) => {
  scrollContainer.scrollLeft += evt.deltaY;
  updateFirstLetter();
});
