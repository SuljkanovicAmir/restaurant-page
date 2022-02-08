function menuPage () {
    let contentDiv = document.querySelector('#content');

    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    contentDiv.appendChild(menuDiv);

    menuDiv.style.backgroundColor = "Red";
    console.log('hello')
}

export default menuPage;