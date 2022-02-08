import homePage from './home';
import menuPage from './menu';

homePage();

let pocetna = document.querySelector('.pocetna');

const menuButton = document.querySelector(".menu-button");
menuButton.classList.add("button-nav");
menuButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(menuButton);
  menuPage();
});


pocetna.addEventListener('click', homePage, {once: true})



function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-buttons");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }