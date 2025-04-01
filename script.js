// 2. Countdown
const visitDate = new Date(2025, 5, 15); // Customize this!
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
    "You’re my favorite person ever.",
    "Counting down to you makes every day better.",
    "Miss your laugh so much!"
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
        heart.style.left = `${Math.random() * 100}%`;
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
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    starName.textContent = "Our First Kiss Star"; // Customize!
});

// 5. Mini Game
const player = document.getElementById('player');
const moveBtn = document.getElementById('move-btn');
const gameMessage = document.getElementById('game-message');
let playerX = 0;
let playerY = 0;
const targetX = 150; // "You" to find
moveBtn.addEventListener('click', () => {
    playerX += 30;
    if (playerX > 150) playerX = 0;
    player.style.left = `${playerX}px`;
    if (playerX === targetX) {
        gameMessage.textContent = "Found me! Next visit soon!";
        gameMessage.classList.remove('hidden');
        setTimeout(() => gameMessage.classList.add('hidden'), 2000);
    }
});

// 6. Mood Tracker
const moodSelect = document.getElementById('mood');
const moodResponse = document.getElementById('mood-response');
const responses = {
    happy: "So glad you’re happy, babe!",
    sad: "Here’s a virtual cuddle for you.",
    excited: "Can’t wait to share that excitement!"
};
moodSelect.addEventListener('change', (e) => {
    const mood = e.target.value;
    if (mood) {
        moodResponse.textContent = responses[mood];
        moodResponse.classList.remove('hidden');
    }
});

// 7. Photo Puzzle (3x3 grid)
const puzzle = document.getElementById('puzzle');
const puzzleMessage = document.getElementById('puzzle-message');
const pieces = [1, 2, 3, 4, 5, 6, 7, 8, ''];
const correct = [...pieces];
let shuffled = pieces.slice().sort(() => Math.random() - 0.5);
shuffled.forEach((num, i) => {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.textContent = num || '';
    piece.dataset.index = i;
    puzzle.appendChild(piece);
});
puzzle.addEventListener('click', (e) => {
    const piece = e.target;
    if (!piece.textContent) return;
    const empty = Array.from(puzzle.children).find(p => !p.textContent);
    const pieceIdx = parseInt(piece.dataset.index);
    const emptyIdx = parseInt(empty.dataset.index);
    if (Math.abs(pieceIdx - emptyIdx) === 1 || Math.abs(pieceIdx - emptyIdx) === 3) {
        empty.textContent = piece.textContent;
        piece.textContent = '';
        shuffled[emptyIdx] = shuffled[pieceIdx];
        shuffled[pieceIdx] = '';
        if (shuffled.join('') === correct.join('')) {
            puzzleMessage.textContent = "You did it! Love you!";
            puzzleMessage.classList.remove('hidden');
        }
    }
});
