function toggleMenu() {
    let menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "250px" ? "0" : "250px";
}

async function loadContent() {
    let savedData = localStorage.getItem("siteContent");

    if (savedData) {
        applyContent(JSON.parse(savedData));
    } else {
        let res = await fetch("assets/data/content.json");
        let data = await res.json();
        applyContent(data);
    }
}

function applyContent(data) {
    document.getElementById("about").innerHTML = `<h2>About Me</h2><p>${data.about}</p>`;
    document.getElementById("likes").innerHTML = `<h2>Likes</h2><p>${data.likes}</p>`;
    document.getElementById("ambitions").innerHTML = `<h2>Ambitions</h2><p>${data.ambitions}</p>`;
    document.getElementById("projects").innerHTML = `<h2>Projects</h2><p>${data.projects}</p>`;
    document.getElementById("contact").innerHTML = `<h2>Contact</h2><p>${data.contact}</p>`;
}

loadContent();
