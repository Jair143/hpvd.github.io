// Set the date for Valentine's Day (Feb 14, 2026)
const eventDate = new Date("Feb 14, 2026 23:59:59").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "It's Valentine's Day! ❤️";
    }
}, 1000);
