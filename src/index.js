// index.js
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

import "./styles.css";


const homeBtn = document.getElementById("homeTab");
const menuBtn = document.getElementById("menuTab");
const aboutBtn = document.getElementById("aboutTab");
   
const homeSection = document.getElementById("homePage");
const menuSection = document.getElementById("menuPage");
const aboutSection = document.getElementById("aboutPage");


hideAllSections();
homeSection.style.display = "block";


function hideAllSections() {
    homeSection.style.display = "none";
    menuSection.style.display = "none";
    aboutSection.style.display = "none";
}
homeBtn.addEventListener("click", function() {
    hideAllSections();
    homeSection.style.display = "block";
});

menuBtn.addEventListener("click", function() {
    
    hideAllSections();
    menuSection.innerText = "";
    menuPage(); 
});

aboutBtn.addEventListener("click", function() {
    hideAllSections();
    aboutSection.style.display = "block";
    aboutSection.style.display = "flex";
    aboutPage();
    
});


