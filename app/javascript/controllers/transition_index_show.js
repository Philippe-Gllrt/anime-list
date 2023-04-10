
const container = document.querySelector('.index-content');


  const animeCards = document.querySelectorAll(".anime-card");
  let totalWidth = 0;
  const scrollLength = 3000;
  const animeList = document.querySelector('.index-content');
  const animeItems = animeList.querySelectorAll('.anime-card');
  let currentIndex = 0;

  for (let i = 0; i < animeCards.length; i++) {
    animeCards[i].addEventListener("click", function() {

      while (totalWidth < scrollLength) {

        const clonedAnime = animeItems[currentIndex].cloneNode(true);
        animeList.appendChild(clonedAnime);
        currentIndex = (currentIndex + 1) % animeItems.length;

        totalWidth += (animeItems[currentIndex].offsetWidth*0.3 - 100);
      }

      $('html, body').animate({
        scrollLeft: `+=${scrollLength}`
      }, 2000);

      setTimeout(function() {
      $('.index-content').addClass('scale-down');
      }, 00);

      setTimeout(function() {
      $('.fade_index').addClass('fade_out')
      }, 1000);

      setTimeout(function() {
        window.location.href = `/animes/${animeCards[i].getAttribute('data-anime-id')}`;
      }, 2200);

    });
  }
