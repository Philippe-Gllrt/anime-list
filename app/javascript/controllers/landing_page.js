const rightPanel = document.querySelector('#right-panel')
const leftPanel = document.querySelector('#left-panel-content')
const rightPanelContent = document.querySelector('#right-panel-content')

rightPanel.addEventListener('animationend', () => {
  leftPanel.classList.remove("no-diplay");
  rightPanelContent.classList.remove("no-diplay");
});
