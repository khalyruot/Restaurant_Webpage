// home.js
import restaurant from "./kong_kitchen_background.jpg"

export function homePage(){
    

    const content = document.createElement("p");
    content.innerText = "Enjoy Our Delicious Meals!!!";
    content.setAttribute("id","content_homepage");
    console.log(document.getElementById("text_content"));
    document.getElementById("text_content").appendChild(content);
    

}



