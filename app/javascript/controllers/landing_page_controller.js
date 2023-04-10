import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="landing-page"
export default class extends Controller {
  static targets = ['leftPanel', 'rightPanel', 'rightPanelContent']

  connect() {
    this.rightPanelTarget.addEventListener('animationend', () => {
      this.leftPanelTarget.classList.remove("no-display");
      this.rightPanelContentTarget.classList.remove("no-display");
    });
  }
};
