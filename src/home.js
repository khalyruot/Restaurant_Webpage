// home.js
import restaurant from "./kong_kitchen_background.jpg"

export function homePage(){

    /*const image = document.createElement("img");
    image.src = kong_kitchen_background.jpg;
    document.getElementById("content").style.backgroundImage = ;

    const contentElement = document.body;
    contentElement.style.backgroundImage = `url(${restaurant})`;
    contentElement.style.backgroundSize = "cover";  // This makes the image cover the entire element
    contentElement.style.backgroundPosition = "center"; // Optional: centers the image in the container
    contentElement.style.backgroundRepeat = "no-repeat";*/
    

    const content = document.createElement("p");
    content.innerText = "Welcome to KongFu Kitchen";
    document.getElementById("text_content").appendChild(content);


    let myArrayFooter = ["Friendly Server", "Delicious Food", "Reasonable Price"];
    
    //create textnode
    for(let i = 0; i < myArrayFooter.length; i++){
        var listArray = document.createElement("li");
        const textToBeAdded = document.createTextNode(myArrayFooter[i]);
        listArray.appendChild(textToBeAdded);
        document.getElementById("text_content").appendChild(listArray);
    }
    

}



