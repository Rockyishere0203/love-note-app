const loveNotes = [
    "Mannu,U r ntg but divine",
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
