// index.js
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

import "./styles.css";

homePage();

function clearContent(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
}

document.getElementById("homeTab").onclick = function() {
    clearContent();
    homePage();
}
document.getElementById("menuTab").onclick = function() {
    clearContent();
    menuPage();
}
document.getElementById("aboutTab").onclick = function() {
    clearContent();
    aboutPage();
}


