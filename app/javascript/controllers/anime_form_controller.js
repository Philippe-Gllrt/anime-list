import { Controller } from "@hotwired/stimulus"
let currentStep = 0;
const progressDots = document.querySelectorAll(".progressdot")

export default class extends Controller {
  static targets = ["formTargets", "progressDots", "form"]

  connect() {
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    // const formData = new FormData(this.formTarget);
    // formData.append('authenticity_token', csrfToken);

    this.formTargetsTargets[currentStep].classList.add('active');
    progressDots[currentStep].setAttribute("id", 'active-dot')
    document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        this.nextStep()
      }
    }.bind(this));
  }

  previousStep() {
    if (currentStep > 0 ) {
      progressDots[currentStep].removeAttribute("id", 'active-dot')
      this.formTargetsTargets[currentStep].classList.remove('active');
      currentStep -= 1;
      this.formTargetsTargets[currentStep].classList.add('active');
    }
  }

  nextStep() {
    if (currentStep === (this.formTargetsTargets.length - 1)) {
      console.log('envoyé')
      this.formTarget.submit()
    }

    if (currentStep <  this.formTargetsTargets.length - 1) {
      this.formTargetsTargets[currentStep].classList.remove('active');
      currentStep += 1;
      this.formTargetsTargets[currentStep].classList.add('active');
      progressDots[currentStep].setAttribute("id", 'active-dot')
    }

    console.log(currentStep)
    console.log(this.formTargetsTargets.length - 1)
  }
}
