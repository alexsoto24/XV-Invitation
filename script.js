// Countdown Timer
const countdown = document.getElementById("countdown");

function updateCountdown() {
    const eventDate = new Date("2025-07-20T00:00:00");
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `${days} days to go!`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Sparkles Effect - Increased Frequency & Density
const sparklesContainer = document.getElementById("sparkles");

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    // Random Position
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2500); // Removed after 2.5s instead of 3s (faster refresh rate)
}

// Generate sparkles every 300ms (more frequent)
setInterval(createSparkle, 400);

