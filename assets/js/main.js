function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "250px" ? "0" : "250px";
}

function openAdmin() {
    const pin = prompt("Enter Admin PIN:");
    if (pin === "1234") {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect PIN");
    }
}

async function loadContent() {
    try {
        const response = await fetch("assets/data/content.json")
        const data = await response.json();

        Object.keys(data).forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                element.innerHTML = `<h2>${section.toUpperCase()}</h2><p>${data[section]}</p>`;
            }
        });
    } catch (error) {
        console.error("Error loading content:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadContent);
