
const scrollPosition = 3000;
const animeList = document.querySelector('.index-content');
const animeItems = animeList.querySelectorAll('.anime-card');
let currentIndex = 0;
let totalWidth = 0;
const OriginalLength = animeItems.length;

// clone list once
for (let i = 0; i < animeItems.length; i++) {
  const clonedAnime = animeItems[currentIndex].cloneNode(true);
  animeList.appendChild(clonedAnime);
  currentIndex = (currentIndex + 1) % animeItems.length;
}

// scroll until the end
animeList.lastElementChild.scrollIntoView();

//scroller jusqu'au premier
$('html, body').animate({
  scrollLeft: `0`
}, 2000);

//retirer les élément ajoutés
setTimeout(() => {
  console.log(OriginalLength);
  console.log(animeItems.length);
  for (let i = OriginalLength; i < OriginalLength*2; i++) {
    console.log(animeItems[i])
    animeList.removeChild(animeItems[i - OriginalLength])
  };
}, 2000);

// a combiner avec le changement de taille
setTimeout(function() {
  $('.index-content').removeClass('scale-down');
  }, 00);
