//Creating footer
const body = document.querySelector("body");
const newFooter = document.createElement("footer");
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
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
//get form element
const messageForm = document.querySelector("[name='leave_message']");

//event listener
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName, usersEmail, usersMessage);

  //displagy messages in list
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href=mailto:${usersEmail}>${usersName}</a><br>
<span>${usersMessage}</span>`;

  //button stuff & event listener
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function (event) {
    const entry = event.target.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

const projectsSection = document.querySelector("#recent-projects");
const projectsList = projectsSection.querySelector("#projectList");

fetch("https://api.github.com/users/laurenbgod/repos")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong 😢");
    }
    return res.json();
  })

  .then((repositories) => {
    console.log(repositories);
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectsList.appendChild(project);
    }
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectsSection.appendChild(errorElement);
  });
