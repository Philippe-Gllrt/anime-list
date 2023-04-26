import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="index-fade-in"
export default class extends Controller {
  static targets = ['animeList', 'animeCard']

  connect() {
    const animeItems = this.animeCardTargets;
    let currentIndex = 0;
    const OriginalLength = animeItems.length;

    if (window.innerWidth > 767) {
      // clone list once
      for (let i = 0; i < animeItems.length; i++) {
        const clonedAnime = animeItems[currentIndex].cloneNode(true);
        this.animeListTarget.appendChild(clonedAnime);
        currentIndex = (currentIndex + 1) % animeItems.length;
      }

      // scroll until the end
      this.animeListTarget.lastElementChild.scrollIntoView();


      //scroller jusqu'au premier
      $('html, body').animate({
        scrollLeft: `0`
      }, 2500);

      //retirer les élément ajoutés
      setTimeout(() => {
        for (let i = OriginalLength; i < OriginalLength*2; i++) {
          this.animeListTarget.removeChild(animeItems[i - OriginalLength])
        };
      }, 3000);

      $(this.element).find("[data-index-fade-in-target='animeList']").removeClass('scale-down');
      // // a combiner avec le changement de taille
      // setTimeout(function() {
      //   this.animeListTarget.removeClass('scale-down');
      // }, 00).bind(this);
    }
    if (window.innerWidth < 767) {
      $(this.element).find("[data-index-fade-in-target='animeList']").removeClass('scale-down');
    }
  }
}
