import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="show-transition"
export default class extends Controller {
  static targets = ['arrow', 'container']
  connect() {
    setTimeout(() => {
      document.querySelector('#show-container').classList.remove('show-fade-in');
    }, 2100);


    this.arrowTarget.addEventListener("click", function() {
      console.log('click');
      document.querySelector('#show-container').classList.add('show-fade-out');
      setTimeout(function() {
        window.location.href = `/animes`;
      }, 1600);
    });
  }
}
