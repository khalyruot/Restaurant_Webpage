// menu.js
import restaurant from "./kong_kitchen_background.jpg"
import crispy_chicken from "./crispy_chicken.png"
import kong_pao_chicken from "./kong_pao_chicken.jpg"



export function menuPage(){
    const menuPart = document.getElementById("menuPage");

    menuPart.style.display = "block";

    const contentDiv = document.getElementById("menuPage"); //Get original div used for content
    //Create section for Menu
    const menuSection = document.createElement('div');
    menuSection.id = 'menu-section';
    

    //Create Menu Header Section
    const menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title';
    const pricing = document.createElement('h4');
    pricing.textContent = 'Pricing Menu'
    const menuHeader = document.createElement('h5');
    menuHeader.textContent = 'Delicious Deals for You';
    console.log("A");

    //Create Menu list of products
    const menuList = document.createElement('div');
    menuList.id = 'menu-list';

    //Creating Pizza 1 div
    const pizza1 = document.createElement('div');
    pizza1.id = 'pizza1'
    pizza1.className = 'dish';

    //Creating product image div
    const pizza1Image = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = crispy_chicken;
    image1.alt = 'hubspot pizza';
    image1.setAttribute("id","image_food");
    pizza1Image.append(image1);
    //Creating and adding pizza details
    const pizza1details = document.createElement('div');
    pizza1details.id = 'dish-details';
    const pizza1name = document.createElement('h3');
    pizza1name.textContent = 'Crispy Chicken'
    const pizza1price = document.createElement('h3');
    pizza1price.textContent = '$5';
    const pizza1ingredients = document.createElement('h6');
    pizza1ingredients.textContent = 'Our signature dish. Crispy chicken wok-tossed in a sweet and spicy orange sauce.';
    pizza1details.append(pizza1name,pizza1price,pizza1ingredients);
    pizza1.append(pizza1Image,pizza1details);


    //Creating Pizza 2 div
    const pizza2 = document.createElement('div');
    pizza2.id = 'pizza2'
    pizza2.className = 'dish';

    //Creating product image div
    const pizza2Image = document.createElement('div');
    const image2 = document.createElement('img');
    image2.src = kong_pao_chicken;
    image2.alt = 'hubspot pizza';
    image2.setAttribute("id","image_food");
    pizza2Image.append(image2);
    //Creating and adding pizza details
    const pizza2details = document.createElement('div');
    pizza2details.id = 'dish-details';
    const pizza2name = document.createElement('h3');
    pizza2name.textContent = 'KUNG PAO CHICKEN'
    const pizza2price = document.createElement('h3');
    pizza2price.textContent = '$5';
    const pizza2ingredients = document.createElement('h6');
    pizza2ingredients.textContent = 'A Szechwan-inspired dish with chicken, peanuts and vegetables, finished with chili peppers.';
    pizza2details.append(pizza2name,pizza2price,pizza2ingredients);
    pizza2.append(pizza2Image,pizza2details);


    //Creating Pizza 3 div
    const pizza3 = document.createElement('div');
    pizza3.id = 'pizza3'
    pizza3.className = 'dish';

    //Creating product image div
    const pizza3Image = document.createElement('div');
    const image3 = document.createElement('img');
    image3.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image3.alt = 'hubspot pizza';
    pizza3Image.append(image3);
    //Creating and adding pizza details
    const pizza3details = document.createElement('div');
    pizza3details.id = 'dish-details';
    const pizza3name = document.createElement('h3');
    pizza3name.textContent = 'Lemon & Garlic Green Beans'
    const pizza3price = document.createElement('h3');
    pizza3price.textContent = '$15';
    const pizza3ingredients = document.createElement('h6');
    pizza3ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza3details.append(pizza3name,pizza3price,pizza3ingredients);
    pizza3.append(pizza3Image,pizza3details);


    //Creating Pizza 3 div
    const pizza4 = document.createElement('div');
    pizza4.id = 'pizza4'
    pizza4.className = 'dish';

    //Creating product image div
    const pizza4Image = document.createElement('div');
    const image4 = document.createElement('img');
    image4.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image4.alt = 'hubspot pizza';
    pizza4Image.append(image4);
    //Creating and adding pizza details
    const pizza4details = document.createElement('div');
    pizza4details.id = 'dish-details';
    const pizza4name = document.createElement('h3');
    pizza4name.textContent = 'Lemon & Garlic Green Beans'
    const pizza4price = document.createElement('h3');
    pizza4price.textContent = '$15';
    const pizza4ingredients = document.createElement('h6');
    pizza4ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza4details.append(pizza4name,pizza4price,pizza4ingredients);
    pizza4.append(pizza4Image,pizza4details);




    //Creating Pizza 3 div
    const pizza5 = document.createElement('div');
    pizza5.id = 'pizza4'
    pizza5.className = 'dish';
    //Creating product image div
    const pizza5Image = document.createElement('div');
    const image5 = document.createElement('img');
    image5.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image5.alt = 'hubspot pizza';
    pizza5Image.append(image5);
    //Creating and adding pizza details
    const pizza5details = document.createElement('div');
    pizza5details.id = 'dish-details';
    const pizza5name = document.createElement('h3');
    pizza5name.textContent = 'Lemon & Garlic Green Beans'
    const pizza5price = document.createElement('h3');
    pizza5price.textContent = '$15';
    const pizza5ingredients = document.createElement('h6');
    pizza5ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza5details.append(pizza5name,pizza5price,pizza5ingredients);
    pizza5.append(pizza5Image,pizza5details);


    //Append menu subsections into menu div
    menuTitle.append(pricing,menuHeader);
    menuList.append(pizza1,pizza2,pizza3, pizza4, pizza5)
    menuSection.append(menuTitle, menuList);




    //Appending different main sections to contentDiv
    contentDiv.append(menuSection);
    

}
