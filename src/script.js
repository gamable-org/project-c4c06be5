// Gamable Project - Main Script
console.log('Gamable project initialized!');

// Get canvas and context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Simple animation example
let rotation = 0;

function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw rotating square
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation);
    
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(-50, -50, 100, 100);
    
    ctx.restore();
    
    // Update rotation
    rotation += 0.02;
    
    // Continue animation
    requestAnimationFrame(animate);
}

// Start animation
animate();

// Add click handler
canvas.addEventListener('click', () => {
    console.log('Canvas clicked!');
    // Add your game logic here
});