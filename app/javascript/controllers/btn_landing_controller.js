import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="btn-landing"
export default class extends Controller {
  static targets =['btn', 'panel1', 'panel2']
  connect() {
    this.btnTarget.addEventListener("click", function() {
        console.log(this.panel1Target);
        this.panel1Target.classList.remove("no-display");
        this.panel2Target.classList.remove("no-display");
        setTimeout(function() {
          window.location.href = `/animes`;
        }, 1400);
    }.bind(this));
  };
};
