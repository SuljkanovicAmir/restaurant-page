
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    
    menu.textContent = "JELOVNIK"

   menu.appendChild(createMenuTitle(
    'PREDJELA'
));

    menu.appendChild(
      createMenuItem(
        "Pašteta od divljači za sladokusce",
        "pašteta, lepinjice",
        "40,00kn"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Riblja pašteta, prava pecaroška",
        "pašteta, ljepinice",
        "30,00kn"
      )
    );
    
    menu.appendChild(
      createMenuItem(
        "Hrskavi čips od šarana",
        "krumpir salata, luk",
        "45,00kn"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Juneći carpaccio",
        "juneći file, tost, maslac, rukola,grana padano, pesto genovese",
        "65,00kn"
      )
    );

   

    menu.appendChild(
      createMenuItem(
        "Tris sireva",
        "tri vrste tvrdog punomasnog sira, masline, orašasti plodovi, suho voće",
        "50,00kn"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Tatarski biftek",
        "juneći file, tost maslac",
        "80,00kn"
      )
    );
    

    menu.appendChild(createMenuTitle(
        'JUHE'
    ));

    menu.appendChild(
      createMenuItem(
        "Dnevna juha",
        "dnevno kuhanje juhe, domaća tjestenina",
        "25,00kn"
      )
    );

    menu.appendChild(createMenuTitle(
        'SPECIJALITETI'
    ));



    menu.appendChild(
      createMenuItem(
        "Janjetina u mlijeku",
        "janjetina bez kosti, kuhano povrće",
        "115,00kn"
      )
    );

    menu.appendChild(
        createMenuItem(
          "Janjeća koljenica",
          "janjeća koljenica, janjeći jus, pire od buče",
          "85,00kn"
        )
      );

      menu.appendChild(
        createMenuItem(
          "Juneći biftek u ulju i začinskom bilju",
          "juneči file, maslinovo ulje i začinsko bilje",
          "145,00kn"
        )
      );

      menu.appendChild(createMenuTitle(
        'ROŠTILJ'
    ));


      menu.appendChild(
        createMenuItem(
          "Lovačka Čingi lingi pljeskavica od 1kg",
          "meso divljači, pomes, ajvar, luk, urnebes, lepinje",
          "145,00kn"
        )
      );

      menu.appendChild(
        createMenuItem(
          "Gurmanska pljeskavica 400g",
          "lepinja, luk, pomfrit, ajvar, urnebes umak",
          "70,00kn"
        )
      );


      menu.appendChild(
        createMenuItem(
          "Pljeskavica 350g",
          "lepinja, luk, pomfrit, ajvar, urnebes umak",
          "60,00kn"
        )
      );


      menu.appendChild(createMenuTitle(
        'VEGETARIJANSKA ILI VEGANSKA JELA'
    ));


      menu.appendChild(
        createMenuItem(
          "Vegetarijanska pasta s povrćem",
          "tjestenina, povrće sezonsko",
          "40,00kn"
        )
      );

      menu.appendChild(
        createMenuItem(
          "Veganski tanjur",
          "povrće na grilu, krumpir salata, bučine sjemenke, bučino ulje",
          "40,00kn"
        )
      );

      menu.appendChild(
        createMenuItem(
          "Veganska salata",
          "avokado, rukola, dressing citrus",
          "55,00kn"
        )
      );


    return menu;
  }
  
  function createMenuTitle (name) {
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");


    const titleName = document.createElement("h1");
    titleName.textContent = name;

    menuTitle.appendChild(titleName)
    menuTitle.setAttribute("data-aos", "fade-up")
    return menuTitle;
  }


  function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    
    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;
    foodPrice.classList.add('price')
    
    
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice);
    menuItem.setAttribute("data-aos", "fade-up")
    return menuItem;
  }
  
  function menuPage () {
    let contentDiv = document.querySelector('#content');
    contentDiv.textContent = "";
    document.body.scrollTop = 0;
    contentDiv.appendChild(createMenu());
}

  





export default menuPage;