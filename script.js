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

    // Update message and GIF for the funny twist
    successMessage.innerText = "No was never an option! 😈💖";
    // Using a funny "Gotcha" or smug bear gif
    successGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTdxYmc3MDM4dW45aHA5bTRxZGZrbjh6c2phbGZndXMxaXMxcGJ5cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/39V7Yg3swPRv2/giphy.gif"; // Cute excited bear

    createConfetti();
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
