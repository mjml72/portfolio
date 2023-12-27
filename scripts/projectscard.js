const projectsbox = document.getElementById("projectsbox");


export function projectCard(project, image) {
    let projectcard = document.createElement("div");
    projectcard.classList.add("projectscard");
    projectcard.style.backgroundImage = `url(${image})`;

    let infoproject = document.createElement("div");
    infoproject.classList.add("infoproject");

    let name = document.createElement("p");
    name.classList.add("nameproject");
    name.textContent = project.name;
    infoproject.append(name);

    let description = document.createElement("p");
    description.textContent = project.description;
    infoproject.append(description);

    let tools = document.createElement("p");
    tools.textContent = project.tools;
    infoproject.append(tools);


    let view = document.createElement("a");
    view.href = project.viewUrl;
    view.target = "_blank";
    view.textContent = "view";
    infoproject.append(view);

    let code = document.createElement("a");
    code.href = project.codeUrl;
    code.target = "_blank";
    code.textContent = "code";
    infoproject.append(code);

    projectcard.append(infoproject);
    projectsbox.append(projectcard);
}