function createGalleryPage () {
    let galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery-div');

    galleryDiv.appendChild(createGalleryTitle(
        'GALERIJA'
    ));

     const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryDiv.appendChild(galleryItem);

    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery1.jpg)'
    ))
    
   

    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery2.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery3.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery4.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery5.jpg)'
    ))
    
    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery6.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery7.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery8.jpg)'
    ))

    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery9.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery10.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery11.jpg)'
    ))

    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery12.jpg)'
    ))
    
    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery13.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery14.jpg)'
    ))


    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery15.jpg)'
    ))

    galleryItem.appendChild(createGalleryItem(
        'url(./images/gallery-images/gallery16.jpg)'
    ))



    return galleryDiv;
    
}

function createGalleryTitle (name) {
    const galleryTitle = document.createElement("div");
    galleryTitle.classList.add("gallery-title");


    const titleName = document.createElement("h1");
    titleName.textContent = name;

    galleryTitle.appendChild(titleName)

    return galleryTitle;
  }



function createGalleryItem(image) {

    let galleryImage = document.createElement('div');
    galleryImage.classList.add('gallery-image')
    galleryImage.style.backgroundImage =  image;
  


    return galleryImage;
  }







function galleryPage () {
    let contentDiv = document.querySelector('#content');
    contentDiv.textContent = "";
    contentDiv.appendChild(createGalleryPage());
}

export default galleryPage;

