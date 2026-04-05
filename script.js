/**
 * Typing effect for the header text on page load
 */
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("typed-header");
    const text = "Meet Team TGA";
    let i = 0;

    function typeChar() {
        if (i < text.length) {
            header.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        } else {
            header.style.borderRight = "none";
        }
    }

    typeChar();
});

/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * Adds a fade-in animation when switching sections
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        visionSection.style.display = "none";
        biosSection.style.display = "flex";
        biosSection.classList.remove("section-fade-in");
        void biosSection.offsetWidth;
        biosSection.classList.add("section-fade-in");
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
        visionSection.classList.remove("section-fade-in");
        void visionSection.offsetWidth;
        visionSection.classList.add("section-fade-in");
    }
}
