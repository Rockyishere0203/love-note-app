const loveNotes = [
    "You’re the best part of my day, every day.",
    "I’m counting the minutes until I see you again.",
    "You make my heart do little flips!",
    "Sending you a big hug from miles away.",
    "You’re my favorite person in the whole world."
];

const revealBtn = document.getElementById('reveal-btn');
const messageEl = document.getElementById('message');
const heartsContainer = document.getElementById('hearts');

function showNote() {
    const today = new Date().getDate() % loveNotes.length;
    const note = loveNotes[today];
    messageEl.textContent = note;
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