const skillsbox = document.getElementById("skillsbox");

export function skillCard(skill) {
   
    let skillcard = document.createElement("div");
    skillcard.classList.add("skillcard");
    skillcard.textContent = skill; 
    skillsbox.append(skillcard);
}