// menu.js
import restaurant from "./kong_kitchen_background.jpg"

export function menuPage(){

    console.log("menu");
    const content = document.createElement("p");
    content.innerText = "Please have a look at our menu";
    document.getElementById("menuPage").appendChild(content);

    /*var image = document.createElement("img");
    image.src = restaurant;
    document.getElementById("text_content").appendChild(image);


    let myArrayFooter = ["Pizza", "Seafood", "Chinese Food"];
    
    //create textnode
    for(let i = 0; i < myArrayFooter.length; i++){
        var listArray = document.createElement("li");
        const textToBeAdded = document.createTextNode(myArrayFooter[i]);
        listArray.appendChild(textToBeAdded);
        document.getElementById("text_content").appendChild(listArray);
    }*/
    

}
