// ===== Side Menu Toggle =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "250px" ? "0" : "250px";
}

// ===== Admin Access =====
function openAdmin() {
    const pin = prompt("Enter Admin PIN:");
    if (pin === "1234") {
        window.location.href = "admin/admin.html";
    } else {
        alert("Incorrect PIN");
    }
}

// ===== Load Dynamic Content =====
async function loadContent() {
    try {
        const response = await fetch("assets/data/content.json");
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

// ==================================================
// ===== Contact Form → Google Sheet Integration =====
// ==================================================

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwSKt-XFrovpj7R2tyDSyk3dzjZX8JvPabc0SHYPVpbTrremlhozbVCtbf964fn-udFpw/exec";

function handleSubmit(event) {
    event.preventDefault();

    const status = document.getElementById("formStatus");
    status.textContent = "Sending message...";

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        if (response.status === "success") {
            status.textContent = "✅ Message sent successfully!";
            document.getElementById("contactForm").reset();
        } else {
            status.textContent = "❌ Something went wrong. Try again.";
        }
    })
    .catch(error => {
        console.error(error);
        status.textContent = "⚠️ Error sending message.";
    });

    return false;
}

function resetForm() {
    document.getElementById("contactForm").reset();
    document.getElementById("formStatus").textContent = "";
}
