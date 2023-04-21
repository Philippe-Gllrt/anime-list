import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="btn-landing"
export default class extends Controller {
  static targets =['btn', 'panel1', 'panel2']
  connect() {
    this.btnTarget.addEventListener("click", function() {
        const panel1 = this.panel1Target;
        const panel2 = this.panel2Target;
        console.log(this.panel1Target);
        panel1.classList.remove("no-display");
        panel2.classList.remove("no-display");
        setTimeout(function() {
          window.location.href = `/animes`;
          setTimeout(function() {
            panel1.classList.add("no-display");
            panel2.classList.add("no-display");
          }, 400);
        }, 1200);
    }.bind(this));
  };
};
