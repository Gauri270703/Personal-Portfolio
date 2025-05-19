const textArray = ["Web Developer", "UI/UX Designer", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("dynamic-text");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Form Submission Alert
document.querySelector(".contact form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});
