const correctPIN = "1234";

function login() {
    let pin = document.getElementById("pinInput").value;
    if (pin === correctPIN) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("editor").style.display = "block";
        loadEditor();
    } else {
        alert("Wrong PIN!");
    }
}

function loadEditor() {
    let content = localStorage.getItem("siteContent");
    let data = content ? JSON.parse(content) : {};

    document.getElementById("aboutText").value = data.about || "";
    document.getElementById("likesText").value = data.likes || "";
    document.getElementById("ambitionsText").value = data.ambitions || "";
    document.getElementById("projectsText").value = data.projects || "";
    document.getElementById("contactText").value = data.contact || "";
}

function saveContent() {
    let updatedContent = {
        about: document.getElementById("aboutText").value,
        likes: document.getElementById("likesText").value,
        ambitions: document.getElementById("ambitionsText").value,
        projects: document.getElementById("projectsText").value,
        contact: document.getElementById("contactText").value
    };

    localStorage.setItem("siteContent", JSON.stringify(updatedContent));
    alert("Saved! Refresh main page.");
}
