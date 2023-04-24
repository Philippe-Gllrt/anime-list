import { Controller } from "@hotwired/stimulus"
let currentStep = 0;

export default class extends Controller {
  static targets = ["formTargets", "form"]

  connect() {
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    // const formData = new FormData(this.formTarget);
    // formData.append('authenticity_token', csrfToken);

    this.formTarget.querySelectorAll('.form-inputs').forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent form submission
        }
      });
    });

    this.formTargetsTargets[currentStep].classList.remove('no-display');
    setTimeout(function() {
      document.querySelectorAll(".progressdot")[currentStep].setAttribute("id", 'active-dot')
    }, 50);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.nextStep()
      }
    }.bind(this));

  }

  previousStep() {
    const progressDots = document.querySelectorAll(".progressdot")
    if (currentStep > 0 ) {
      progressDots[currentStep].removeAttribute("id", 'active-dot')
      this.formTargetsTargets[currentStep].classList.add('no-display');
      currentStep -= 1;
      this.formTargetsTargets[currentStep].classList.remove('no-display');
    }
  }

  nextStep() {
    const progressDots = document.querySelectorAll(".progressdot")
    if (currentStep === (this.formTargetsTargets.length - 1)) {
      this.formTarget.submit()
    }

    if (currentStep <  this.formTargetsTargets.length - 1) {
      this.formTargetsTargets[currentStep].classList.add('no-display');
      currentStep += 1;
      this.formTargetsTargets[currentStep].classList.remove('no-display');
      progressDots[currentStep].setAttribute("id", 'active-dot')
    }
  }
}
