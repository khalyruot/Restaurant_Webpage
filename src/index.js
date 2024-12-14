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

    aboutSection.style.display = "flex";

    const location_1 = document.getElementById("location_1");
    const location_2 = document.getElementById("location_2");
    const location_3 = document.getElementById("location_3");
    const location_4 = document.getElementById("location_4");

    location_4.style.display = "none";
    location_2.style.display = "none";
    location_3.style.display = "none";
    location_1.style.display = "block";
    location_1.style.display = "flex";

    aboutPage();
    
});


