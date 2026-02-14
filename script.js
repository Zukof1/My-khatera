// Add floating hearts background
function createFloatingHearts() {
    const body = document.body;
    const heartChars = ['❤️', '💖', '💝', '💕', '💗'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerText = heartChars[Math.floor(Math.random() * heartChars.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 10 + 's'; // 10-15s float speed
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000);
    }, 1000);
}

createFloatingHearts();

// Music & Overlay logic
const overlay = document.getElementById('overlay');
const bgMusic = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const musicBars = document.getElementById('music-bars');
const musicNote = document.querySelector('.music-note');
const albumArt = document.querySelector('.album-art');

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        musicBars.classList.remove('paused');
        musicNote.style.animationPlayState = 'running';
    } else {
        bgMusic.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        musicBars.classList.add('paused');
        musicNote.style.animationPlayState = 'paused';
    }
}

playPauseBtn.addEventListener('click', toggleMusic);

overlay.addEventListener('click', () => {
    // Start music via the toggle to sync UI
    if (bgMusic.paused) {
        toggleMusic();
    }

    overlay.classList.add('fade-out');
    document.getElementById('main-container').classList.remove('hidden');

    // Remove overlay from DOM after fade out
    setTimeout(() => {
        overlay.remove();
    }, 500);
});

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success-container');
const successMessage = successContainer.querySelector('.success-message');
const successGif = successContainer.querySelector('img');

// Function to transform "No" into "Yes"
function transformToYes() {
    // Transform visuals
    noBtn.innerText = "Yes";
    noBtn.classList.remove('no-btn');
    noBtn.classList.add('yes-btn');

    // Scale effect to draw attention
    noBtn.style.transform = 'scale(1.1)';

    // Change click handler to the "Forced" success
    noBtn.removeEventListener('click', transformToYes);
    noBtn.addEventListener('click', showForcedSuccess);
}

// Standard Success (Clicked original Yes)
function showSuccess() {
    mainContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
    // Default message/gif is already in HTML
    createConfetti();
}

// Forced Success (Clicked transformed No)
function showForcedSuccess() {
    mainContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');

    // Step 1: The Funny Twist
    successMessage.innerText = "No was never an option! 😈💖";
    successGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTdxYmc3MDM4dW45aHA5bTRxZGZrbjh6c2phbGZndXMxaXMxcGJ5cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/39V7Yg3swPRv2/giphy.gif";

    createConfetti();

    // Step 2: The Romantic Follow-up (after 3 seconds)
    setTimeout(() => {
        successMessage.innerText = "my baby I love you kheli ziyaaad Khatera Jaaaan ma ❤️";
        successGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXRxaTQzajdiYzV1dzR4M3M1MGJwdmxjd2w1azVkbHNqNjA4Y3F4ciZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MDJ9IbxxvDUQM/giphy.gif";
        createConfetti(); // More confetti for the sweet part!
    }, 3000);
}

// Simple Confetti Effect
function createConfetti() {
    const colors = ['#ff4d6d', '#ff9a9e', '#fecfef', '#e74c3c', '#2ecc71', '#3498db'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random properties
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3-5s fall
        confetti.style.opacity = Math.random();

        document.body.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Event Listeners
// No movement listeners anymore
noBtn.addEventListener('click', transformToYes);
yesBtn.addEventListener('click', showSuccess);
