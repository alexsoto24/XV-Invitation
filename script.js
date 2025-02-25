document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");

    function playMusic() {
        audio.play().catch(error => console.log("Autoplay blocked, waiting for user interaction."));
        document.removeEventListener("click", playMusic); // Remove event listener after first click
    }

    document.addEventListener("click", playMusic);
});


// Sparkles Effect - Increased Frequency & Density
const sparklesContainer = document.getElementById("sparkles");

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    const margin = 50; // Minimum distance from window edges
    const maxWidth = window.innerWidth - margin;
    const maxHeight = window.innerHeight - margin;

    // Random Position within safe margins
    const x = Math.random() * (maxWidth - margin) + margin / 2;
    const y = Math.random() * (maxHeight - margin) + margin / 2;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000); // Removed after 1s (faster refresh rate)
}

// Generate sparkles every 100ms (high frequency)
setInterval(createSparkle, 100);
