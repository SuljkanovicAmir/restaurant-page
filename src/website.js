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
    let scrollHome = document.querySelector('.home-div');
    scrollHome.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  });


const menuButton = document.querySelector(".menu-button");
menuButton.classList.add("nav-buttons");
menuButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(menuButton);
  menuPage();
  let scrollMenu = document.querySelector('.menu');
  scrollMenu.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

const contactButton = document.querySelector(".contact-button");
contactButton.classList.add("nav-buttons");
contactButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(contactButton);
  contactPage();
  let scrollContact = document.querySelector('.contact-div');
  scrollContact.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const galleryButton = document.querySelector(".gallery-button");
galleryButton.classList.add("nav-buttons");
galleryButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(galleryButton);
  galleryPage();
  let scrollGallery = document.querySelector('.gallery-div');
  scrollGallery.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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