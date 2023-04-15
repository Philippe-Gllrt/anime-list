import { Controller } from "@hotwired/stimulus"
let currentStep = 0;
const progressDots = document.querySelectorAll(".progressdot")

export default class extends Controller {
  static targets = ["formTargets", "progressDots"]

  connect() {
    this.formTargetsTargets[currentStep].classList.add('active');
    progressDots[currentStep].classList.add('active-dot');

  }

  previousStep() {
    if (currentStep > 0 ) {
      progressDots[currentStep].classList.remove('active-dot')
      this.formTargetsTargets[currentStep].classList.remove('active');
      currentStep -= 1;
      this.formTargetsTargets[currentStep].classList.add('active');
    }
  }

  nextStep() {
    if (currentStep <  this.formTargetsTargets.length - 2) {
      this.formTargetsTargets[currentStep].classList.remove('active');
      currentStep += 1;
      this.formTargetsTargets[currentStep].classList.add('active');
      progressDots[currentStep].classList.add('active-dot')
    }
  }

  updateActiveStep() {

  }
}
