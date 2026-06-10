// Duplicate this file and edit the information for each character in your game

const characterData = {
    name: "Character One",
    image: "https://placeholder.com",
    info: "This is a detailed description of the character, their backstory, and what makes them unique in the game.",
    strategy: "To counter them, dodge their primary attack when they glow red, then use a quick melee strike to break their shield."
};

// This automatically builds the page structure when the file is loaded
document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = `
        <div class="char-container">
            <img class="char-img" src="${characterData.image}" alt="${characterData.name}">
            <div class="char-details">
                <h1>${characterData.name}</h1>
                <h3>Background Info:</h3>
                <p>${characterData.info}</p>
                <h3>How to Deal With Them:</h3>
                <p>${characterData.strategy}</p>
            </div>
            <a class="back-btn" href="index.html">← Back to Wiki Home</a>
        </div>
    `;
});
