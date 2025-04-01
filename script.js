// Play music on first interaction (due to browser policies)
document.addEventListener('click', () => {
    document.getElementById('bg-music').play().catch(e => console.log("Music blocked:", e));
}, { once: true });

// 2. Countdown (April 12, 2025)
const visitDate = new Date(2025, 3, 12); // April 12, 2025 (month is 0-based)
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
function updateCountdown() {
    const now = new Date();
    const timeLeft = visitDate - now;
    if (timeLeft <= 0) {
        daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = 0;
        return;
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 1. Love Notes
const loveNotes = [
    "Mannu, U r ntg but divine",
    "U r the best thing ever happened to me ammi",
    "My sweet dumbo, u r the best",
    "BIGGGGG TIGHTTTT HUGSSS",
    "MY cutie pie"
];
const revealBtn = document.getElementById('reveal-btn');
const messageEl = document.getElementById('message');
const heartsContainer = document.getElementById('hearts');
function showNote() {
    const today = new Date().getDate() % loveNotes.length;
    messageEl.textContent = loveNotes[today];
    messageEl.classList.remove('hidden');
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 90}%`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}
revealBtn.addEventListener('click', showNote);

// 3. Virtual Hug
const hugBtn = document.getElementById('hug-btn');
const hugAnimation = document.getElementById('hug-animation');
hugBtn.addEventListener('click', () => {
    hugAnimation.classList.remove('hidden');
    setTimeout(() => hugAnimation.classList.add('hidden'), 2000);
});

// 4. Star-Gazing
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = 200;
const stars = [];
for (let i = 0; i < 50; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 2 });
}
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}
drawStars();
const starName = document.getElementById('star-name');
canvas.addEventListener('click', () => {
    starName.textContent = "Our Forever Star";
});

// 5. Mini Game
const player = document.getElementById('player');
const moveBtn = document.getElementById('move-btn');
const gameMessage = document.getElementById('game-message');
let playerX = 0;
const targetX = 150;
moveBtn.addEventListener('click', () => {
    playerX += 30;
    if (playerX > 150) playerX = 0;
    player.style.left = `${playerX}px`;
    if (playerX === targetX) {
        gameMessage.textContent = "Found me, my love!";
        gameMessage.classList.remove('hidden');
        setTimeout(() => gameMessage.classList.add('hidden'), 2000);
    }
});

// 6. Mood Tracker
const moodSelect = document.getElementById('mood');
const moodResponse = document.getElementById('mood-response');
const responses = {
    happy: "My Mannu’s happy—best feeling ever!",
    sad: "Wrapping you in a big hug, Ammi.",
    excited: "Can’t wait to share that excitement!"
};
moodSelect.addEventListener('change', (e) => {
    const mood = e.target.value;
    if (mood) {
        moodResponse.textContent = responses[mood];
        moodResponse.classList.remove('hidden');
    }
});

// Falling Flowers
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 10000);
}
setInterval(createFlower, 500);

// Surprise Box
const surpriseBox = document.getElementById('surprise-box');
const surpriseBtn = document.getElementById('surprise-btn');
const surpriseMessage = document.getElementById('surprise-message');
setTimeout(() => surpriseBox.classList.remove('hidden'), 5000); // Show after 5s
surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.remove('hidden');
    setTimeout(() => surpriseMessage.classList.add('hidden'), 3000);
});
