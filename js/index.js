//Creating footer 
document.appendChild(document.createElement("footer"));

//insert copyright text in footer
//// creating date
const today = new Date();
const thisYear = today.getFullYear();
//// place in footer
const footer = document.querySelector("footer");
const copyright = footer.createElement("p");
p.innerHTML = `<p> Lauren Godwin ${thisYear} </p>`;
footer.appendChild(p.innerHTML);

//Add skills section 
const skills = ["Javascipt", "HTML", "CSS", "GitHub", "Stata"];
const skillsSection = document.querySelector("#my-skills");
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i <skills.length; i++){
    ul.innerHTML = skills[i];
    section.appendChild(ul.innerHTML);
}