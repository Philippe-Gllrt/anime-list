import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="btn-return"
export default class extends Controller {
  static targets= ['arrow']
  connect() {
    this.arrowTarget.addEventListener("click", function() {

      document.querySelector('.show-container').classList.add('recommendation-disppear-1')

      setTimeout(function() {
        window.location.href = `/animes`;
        setTimeout(function() {
          document.querySelector('.show-container').classList.remove('recommendation-disppear-1')
        }, 50);
      }, 1000);
    });
  }
}
