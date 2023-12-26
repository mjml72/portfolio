import { projectsData, skillsData } from "./data.js";
import { projectCard } from "./projectscard.js";
import { skillCard } from "./skillscard.js";

const btnMenu = document.getElementById("btnmenu");
const nav = document.getElementById("nav");

window.addEventListener("load", () => {
    for (let i = 0; i < projectsData.length; i++) {
        projectCard(projectsData[i]);
    }   
    for (let i = 0; i < skillsData.length; i++) {
        skillCard(skillsData[i]);        
    }
});

btnMenu.addEventListener("click", () => {

    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

nav.addEventListener("click", () => {
    nav.style.display = "none";
});

