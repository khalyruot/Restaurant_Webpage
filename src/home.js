// home.js
import restaurant from "./restaurant.jpg"

export function homePage(){
    const content = document.createElement("p");
    content.innerText = "Welcome to Our Local Cambodian Restaurant town";
    document.getElementById("content").appendChild(content);


    
    const image = document.createElement("img");
    image.src = restaurant;
    document.getElementById("content").appendChild(image);


    let myArrayFooter = ["Friendly Server", "Delicious Food", "Reasonable Price"];
    
    //create textnode
    for(let i = 0; i < myArrayFooter.length; i++){
        var listArray = document.createElement("li");
        const textToBeAdded = document.createTextNode(myArrayFooter[i]);
        listArray.appendChild(textToBeAdded);
        document.getElementById("content").appendChild(listArray);
    }
    

}



