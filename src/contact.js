import { first } from "lodash";

function createContactUs () {
    let contact = document.createElement('div');
    contact.classList.add('contact-div');

    contact.textContent = "KONTAKTIRAJTE NAS"


    let firstDiv = document.createElement('div');
    firstDiv.classList.add('adress-div')
    let adressDiv = document.createElement('div')
    adressDiv.classList.add('adress');

    let adressTitle = document.createElement('h2');
    adressTitle.classList.add('adress-title');
    adressTitle.textContent = "ADRESA";
    adressDiv.appendChild(adressTitle);

    let adressText = document.createElement('p');
    adressText.classList.add('adress-text');
    adressText.textContent += "Ul. kralja Zvonimira,  \r\n"
    adressText.textContent += "Bilje 31327,  \r\n"
    adressText.textContent += "Hrvatska \r\n"
    adressText.textContent += "+385 31 281 700"
    adressDiv.appendChild(adressText)

    firstDiv.appendChild(adressDiv)

    let span = document.createElement('span')
    span.classList.add('contact-span')




    let mapDiv = document.createElement('div')
    mapDiv.classList.add('map-div')
    firstDiv.appendChild(mapDiv)
    mapDiv.textContent = "LOKACIJA:"
    let iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d987.0878519327399!2d18.73723277852779!3d45.592433261434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24a0e278a6ca24b7!2zxIxpbmdpIExpbmdpIMSMYXJkYQ!5e0!3m2!1sen!2sba!4v1644527641372!5m2!1sen!2sba';
    iframe.classList.add('map')
    mapDiv.appendChild(iframe)




    let secondDiv = document.createElement('div');
    secondDiv.classList.add('second-div')

    let workTime = document.createElement('h2');
    workTime.classList.add('work-time');
    workTime.textContent = "RADNO VRIJEME"
    secondDiv.appendChild(workTime)

    let workTimeDescription = document.createElement('p');
    workTimeDescription.classList.add('work-description');
    workTimeDescription.textContent += "PONEDJELJAK - PETAK\r\n"
    workTimeDescription.textContent += "9:00AM - 11:00PM\r\n"
    secondDiv.appendChild(workTimeDescription)

    let span2 = document.createElement('span')
    span2.classList.add('contact-span')


    let thirdDiv = document.createElement('div');
    thirdDiv.classList.add('third-div')

    let reservation = document.createElement('h2');
    reservation.classList.add('reservation');
    reservation.textContent = "REZERVACIJA"
    thirdDiv.appendChild(reservation)


    let reservationText = document.createElement('p');
    reservationText.classList.add('reservation-text');
    reservationText.textContent = "Napravite rezervaciju ispod"
    thirdDiv.appendChild(reservationText)

    let reservationButton = document.createElement('button');
    reservationButton.classList.add('reservation-button');
    reservationButton.textContent = "REZERVACIJA"
    thirdDiv.appendChild(reservationButton)


    contact.appendChild(firstDiv)
    contact.appendChild(span)
    contact.appendChild(secondDiv)
    contact.appendChild(span2)
    contact.appendChild(thirdDiv)


    return contact;
}


function contactPage () {
    let contentDiv = document.querySelector('#content');
    contentDiv.textContent = "";

    contentDiv.appendChild(createContactUs());
}

  

export default contactPage;