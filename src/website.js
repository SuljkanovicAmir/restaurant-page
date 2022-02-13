import contactPage from './contact';
import homePage from './home';
import menuPage from './menu';
import galleryPage from './gallery';

const homeButton = document.querySelector(".home-button");
  homeButton.classList.add("nav-buttons");
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    homePage();
  });


const menuButton = document.querySelector(".menu-button");
menuButton.classList.add("nav-buttons");
menuButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(menuButton);
  menuPage();
});

const contactButton = document.querySelector(".contact-button");
contactButton.classList.add("nav-buttons");
contactButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(contactButton);
  contactPage();
});

const galleryButton = document.querySelector(".gallery-button");
galleryButton.classList.add("nav-buttons");
galleryButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(galleryButton);
  galleryPage();
});




function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-buttons");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

  function initializeWebsite() {
    const content = document.getElementById("content");
  
    setActiveButton(document.querySelector(".nav-buttons"));
    homePage();
  }





  
  export default initializeWebsite;