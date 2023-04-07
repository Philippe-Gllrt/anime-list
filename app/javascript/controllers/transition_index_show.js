
const container = document.querySelector('.index-content');

document.addEventListener("DOMContentLoaded", function() {
  const animeCards = document.querySelectorAll(".anime-card");
  for (let i = 0; i < animeCards.length; i++) {
    animeCards[i].addEventListener("click", function() {
      console.log(animeCards[i]);
      // container.className += " reduced"
      $('html, body').animate({
        scrollLeft: "+=7000"
      }, 3000);

      setTimeout(function() {
      $('.index-content').addClass('scale-down');
      // setTimeout(function() {
      //   $('.index-content').removeClass('scale-down');
      // }, 2000);
      }, 300);
    });
  }
});
