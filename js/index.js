//Creating footer 
const body = document.querySelector("body");
const newFooter = document.createElement("footer")
body.appendChild(newFooter);

//insert copyright text in footer
//// creating date
const today = new Date();
const thisYear = today.getFullYear();
//// place in footer
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<p> Lauren Godwin ${thisYear} </p>`;
footer.appendChild(copyright);

//Add skills section 
const skills = ["Javascipt", "HTML", "CSS", "GitHub", "Stata"];
const skillsSection = document.querySelector("#my-skills");
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i <skills.length; i++){
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}