import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // static targets = ["formStep", "progressDot"]
  // static classes = ["current"]

  // connect() {
  //   console.log('connected');
  //   this.currentStep = 1
  //   this.showStep(this.currentStep)
  // }

  // nextStep() {
  //   if (this.currentStep >= this.formStepTargets.length) {
  //     return
  //   }
  //   this.currentStep++
  //   this.showStep(this.currentStep)
  // }

  // prevStep() {
  //   if (this.currentStep <= 1) {
  //     return
  //   }
  //   this.currentStep--
  //   this.showStep(this.currentStep)
  // }

  // showStep(step) {
  //   this.formStepTargets.forEach((stepTarget, index) => {
  //     if (index + 1 === step) {
  //       stepTarget.classList.add(this.currentClass)
  //     } else {
  //       stepTarget.classList.remove(this.currentClass)
  //     }
  //   })
  //   this.progressDotTargets.forEach((dotTarget, index) => {
  //     if (index + 1 === step) {
  //       dotTarget.classList.add(this.currentClass)
  //     } else {
  //       dotTarget.classList.remove(this.currentClass)
  //     }
  //     if (index + 1 < step) {
  //       dotTarget.style.opacity = 1
  //     } else {
  //       dotTarget.style.opacity = 0.5
  //     }
    // })
  // }
}
