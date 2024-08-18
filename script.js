const wheel1 = document.getElementById('wheel1');
const wheel2 = document.getElementById('wheel2');
const result = document.getElementById('result');
const fireworksCanvas = document.getElementById('fireworksCanvas');
const context = fireworksCanvas.getContext('2d');
fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

const mayoFlavors = ["Classic", "Garlic Aioli", "Olive Oil", "Mayochup", "Spicy", "Truffle"];
const jelloFlavors = ["Lemon", "Blue Raspberry", "Pineapple", "Lime", "Strawberry", "Grape"];

document.getElementById('spinButton').addEventListener('click', () => {
    const spins1 = Math.floor(Math.random() * 360) + 1800;  
    const spins2 = Math.floor(Math.random() * 360) + 1800;
    const segmentAngle = 360 / mayoFlavors.length;

    const chosenMayoIndex = Math.floor(((spins1 % 360) / segmentAngle));
    const chosenJelloIndex = Math.floor(((spins2 % 360) / segmentAngle));

    const chosenMayo = mayoFlavors[mayoFlavors.length - chosenMayoIndex - 1];
    const chosenJello = jelloFlavors[jelloFlavors.length - chosenJelloIndex - 1];

    wheel1.style.transform = `rotate(${spins1}deg)`;
    wheel2.style.transform = `rotate(${spins2}deg)`;

    setTimeout(() => {
        result.innerText = `You got: ${chosenMayo} Mayo with ${chosenJello} Jello!`;
        showFireworks();
    }, 4000); 
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
