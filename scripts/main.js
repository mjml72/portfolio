import { projectCard } from "./projectscard.js";
import { skillCard } from "./skillscard.js";

const skillsData = ["HTML", "CSS", "JavaScript", "React", "Python",
    "Node.js", "Express.js", "SQL", "C#", "Java", "Flutter", "Dart", "Unity",
    "Godot", "Blender"];

const images = ["images/calculator.jpg", "images/countriesapp.jpg",
    "images/pokedex.jpg", "images/tipcalculator.jpg", "images/cocktailsapp.jpg",
    "images/mealsapp.jpg", "images/theplanets.jpg",
    "images/countriesappflutter.jpg"];

const btnMenu = document.getElementById("btnmenu");
const nav = document.getElementById("nav");

async function fetchData() {
    let response = await fetch("data/projectsData.json");
    let data = await response.json();
    createCards(data);
}

function createCards(projectsData) {
    for (let i = 0; i < skillsData.length; i++) {
        skillCard(skillsData[i]);
    }

    for (let i = 0; i < projectsData.length; i++) {
        projectCard(projectsData[i], images[i]);
    }

}
window.addEventListener("load", fetchData);

btnMenu.addEventListener("click", () => {

    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

nav.addEventListener("click", () => {
    nav.style.display = "none";
});

