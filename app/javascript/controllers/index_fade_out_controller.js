  import { Controller } from "@hotwired/stimulus"

  // Connects to data-controller="index-fade-out"
  export default class extends Controller {
    static targets = ['animeList', 'animeCard']

    connect() {
      const animeCards = this.animeCardTargets;
      let totalWidth = 0;
      const scrollLength = 3000;
      const animeList = this.animeListTarget;
      // const animeList = this.animeListTarget;
      let currentIndex = 0;

      for (let i = 0; i < animeCards.length; i++) {
        animeCards[i].addEventListener("click", function() {

          while (totalWidth < scrollLength) {

            const clonedAnime = animeCards[currentIndex].cloneNode(true);
            console.log(animeList);
            animeList.appendChild(clonedAnime);
            currentIndex = (currentIndex + 1) % animeCards.length;

            totalWidth += (100);
            // console.log((animeCards[currentIndex].offsetWidth*0.3 - 100));
          }

          $('html, body').animate({
            scrollLeft: `+=${scrollLength}`
          }, 3000);

          $('[data-index-fade-out-target="animeList"]').addClass('scale-down');

          setTimeout(function() {
          $('.fade_index').addClass('fade_out')
          }, 1000);

          setTimeout(function() {
            window.location.href = `/animes/${animeCards[i].getAttribute('data-anime-id')}`;
          }, 2200);

        });
      }
    }
  }
