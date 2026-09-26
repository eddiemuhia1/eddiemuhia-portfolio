const skills = ["HTML", "CSS", "JavaScript", "Python", "Git"];

const skillsList = document.getElementById("skills-list");

for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}
