const skills = ["HTML", "CSS", "JavaScript", "Python", "Git"];

const skillsList = document.getElementById("skills-list");

for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}
const projects = [
    {
        title: "Compound Interest Calculator",
        description: "A command-line tool that calculates compound interest based on user input, built with Node.js.",
        tech: "JavaScript, Node.js",
        link: "https://github.com/eddiemuhia1/interest-calculator"
    },
    {
        title: "Bella Cucina Restaurant Site",
        description: "A responsive restaurant website with a hero section, menu, and about page.",
        tech: "HTML, CSS",
        link: "https://eddiemuhia1.github.io/bella-cucina-restaurant/"
    },
    {
        title: "Magician Secret number game",
        description: "A command-line Python game where players guess a secret number to escape an endless loop. Features dynamic difficulty levels, randomized numbers, and input validation.",
        tech: "Python",
        link: "https://github.com/eddiemuhia1/magician-secret-number-game"
    }
];
const projectsContainer = document.getElementById("projects-container");

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tech = document.createElement("p");
    tech.textContent = "Tech: " + project.tech;

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";
    link.target = "_blank";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tech);
    card.appendChild(link);

    projectsContainer.appendChild(card);
}