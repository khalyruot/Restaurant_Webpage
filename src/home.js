// home.js
import restaurant from "./kong_kitchen_background.jpg"

export function homePage(){

    document.body.classList.add('no-scroll');
    
    const textElement = document.getElementById('text_content');

    const content = document.createElement("p");
    content.innerText = "Enjoy Our Delicious Meals!!!";
    content.setAttribute("id","content_homepage");
    console.log(document.getElementById("text_content"));
    document.getElementById("text_content").appendChild(content);
    
    textElement.addEventListener('animationend', function() {
    // Remove the no-scroll class after the animation is finished
    document.body.classList.remove('no-scroll');
    });
}



