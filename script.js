const wheel = document.getElementById('wheel');
const result = document.getElementById('result');
const segments = ["Vanilla", "Chocolate", "Strawberry", "Mint", "Coffee", "Lemon"];

document.getElementById('spinButton').addEventListener('click', () => {
    const spins = Math.floor(Math.random() * 360) + 1800;  // 1800 ensures at least 5 full rotations
    const segmentAngle = 360 / segments.length;
    const chosenSegmentIndex = Math.floor(((spins % 360) / segmentAngle));
    const chosenSegment = segments[segments.length - chosenSegmentIndex - 1];

    wheel.style.transform = `rotate(${spins}deg)`;

    setTimeout(() => {
        result.innerText = `You got: ${chosenSegment}`;
    }, 4000); // Match with the CSS transition duration
});
