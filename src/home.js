
function createHomePage () {
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    let leftGallery = document.createElement('div');
    leftGallery.classList.add('left-gallery');
    homeDiv.appendChild(leftGallery);
    
    let span2 = document.createElement('span')
    span2.classList.add('home-span')
    homeDiv.appendChild(span2)

    let rightTop = document.createElement('div');
    rightTop.classList.add('right-top-gallery');
    homeDiv.appendChild(rightTop);

    let rightBottom = document.createElement('div');
    rightBottom.classList.add('right-bottom-gallery');

    homeDiv.appendChild(rightBottom);

    let bottomInfo = document.createElement('p');
    bottomInfo.classList.add('info');
    bottomInfo.textContent += "Ul. kralja Zvonimira,  \r\n"
    bottomInfo.textContent += "Bilje 31327,  \r\n"
    bottomInfo.textContent += "Hrvatska \r\n"
    bottomInfo.textContent += "+385 31 281 700"
    homeDiv.appendChild(bottomInfo);

    let span = document.createElement('span')
    span.classList.add('home-span')
    homeDiv.appendChild(span)

    let bottomInfo2 = document.createElement('p');
    bottomInfo2.classList.add('info2');
    bottomInfo2.textContent += "PONEDJELJAK - PETAK\r\n"
    bottomInfo2.textContent += "9:00AM - 11:00PM\r\n"
    homeDiv.appendChild(bottomInfo2);

    return homeDiv;
}

function homePage () {
    let contentDiv = document.querySelector('#content');
    contentDiv.textContent = "";
    contentDiv.appendChild(createHomePage());
}

export default homePage;




