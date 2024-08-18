const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const result = document.getElementById('result');
const fireworksCanvas = document.getElementById('fireworksCanvas');
const context = fireworksCanvas.getContext('2d');
fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

const mayoFlavors = ["Classic", "Garlic Aioli", "Olive Oil", "Mayochup", "Spicy", "Truffle"];
const jelloFlavors = ["Lemon", "Blue Raspberry", "Pineapple", "Lime", "Strawberry", "Grape"];

function spinReel(reel, items) {
    const spins = Math.floor(Math.random() * items.length) * 50; 
    reel.style.transform = `translateY(-${spins}px)`;
    return items[spins / 50 % items.length];
}

document.getElementById('spinButton').addEventListener('click', () => {
    const chosenMayo = spinReel(reel1, mayoFlavors);
    const chosenJello = spinReel(reel2, jelloFlavors);

    setTimeout(() => {
        result.innerText = `You got: ${chosenMayo} Mayo with ${chosenJello} Jello!`;
        showFireworks();
    }, 2000); 
});

function showFireworks() {
    fireworksCanvas.style.display = 'block';

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            drawFirework(Math.random() * fireworksCanvas.width, Math.random() * fireworksCanvas.height);
        }, i * 300);
    }

    setTimeout(() => {
        fireworksCanvas.style.display = 'none';
    }, 5000);
}

function drawFirework(x, y) {
    const colors = ['#ffcc00', '#ff9900', '#ff6666', '#66cc66', '#66cccc', '#9999cc'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}
