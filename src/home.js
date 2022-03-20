
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


    
    let image1 = document.createElement('img')
    image1.classList.add('mySlides')
    image1.style.backgroundImage = 'url(./images/gallery-images/gallery3.jpg)'
    leftGallery.appendChild(image1)

    let image2 = document.createElement('img')
    image2.classList.add('mySlides')
    image2.style.backgroundImage = 'url(./images/gallery-images/gallery8.jpg)'
    leftGallery.appendChild(image2)

    let image3 = document.createElement('img')
    image3.classList.add('mySlides')
    image3.style.backgroundImage = 'url(./images/gallery-images/gallery5.jpg)'
    leftGallery.appendChild(image3)

    let image4 = document.createElement('img')
    image4.classList.add('mySlides')
    image4.style.backgroundImage = 'url(./images/gallery-images/gallery20.jpg)'
    leftGallery.appendChild(image4)

    let image5 = document.createElement('img')
    image5.classList.add('mySlides')
    image5.style.backgroundImage = 'url(./images/gallery-images/gallery19.jpg)'
    leftGallery.appendChild(image5)
    


    return homeDiv;
}

function homePage () {
    let contentDiv = document.querySelector('#content');
    contentDiv.textContent = "";
    document.body.scrollTop = 0;
    contentDiv.appendChild(createHomePage());
    
    let myIndex = 0;
    createGallerySlide()
    
    function createGallerySlide() {
        
        let x = document.querySelectorAll(".mySlides");
        let i;
        for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";  
        setTimeout(createGallerySlide, 3500); 
      }
    
}







export default homePage;




