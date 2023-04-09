  const btn = document.querySelector('.btn-home-index');
  const fadePanels = document.querySelectorAll('.fade-out-index');

  btn.addEventListener("click", function() {
    for (let i = 0; i < fadePanels.length; i++) {
      fadePanels[i].classList.remove("no-diplay");
      setTimeout(function() {
        window.location.href = `/animes`;
      }, 1400);
    };
  });
