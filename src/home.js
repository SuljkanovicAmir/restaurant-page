
function homePage () {
    let contentDiv = document.querySelector('#content');

    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');
    contentDiv.appendChild(homeDiv)

    let leftGallery = document.createElement('div');
    leftGallery.classList.add('left-gallery');
    homeDiv.appendChild(leftGallery);
    
    let rightTop = document.createElement('div');
    rightTop.classList.add('right-top-gallery');
    homeDiv.appendChild(rightTop);

    let rightBottom = document.createElement('div');
    rightBottom.classList.add('right-bottom-gallery');

    homeDiv.appendChild(rightBottom);
}


export default homePage;