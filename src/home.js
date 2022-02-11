
function createHomePage () {
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    let leftGallery = document.createElement('div');
    leftGallery.classList.add('left-gallery');
    homeDiv.appendChild(leftGallery);
    
    let rightTop = document.createElement('div');
    rightTop.classList.add('right-top-gallery');
    homeDiv.appendChild(rightTop);

    let rightBottom = document.createElement('div');
    rightBottom.classList.add('right-bottom-gallery');

    homeDiv.appendChild(rightBottom);
    return homeDiv;
}

function homePage () {
    let contentDiv = document.querySelector('#content');
    contentDiv.textContent = "";
    contentDiv.appendChild(createHomePage());
}

export default homePage;




