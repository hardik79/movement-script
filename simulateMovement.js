const robot = require("robotjs");

function simulateActions() {
  // Simulate mouse movement
  const targetX = 500;
  const targetY = 500;
  robot.moveMouseSmooth(targetX, targetY);

  // Simulate a keyboard key press (e.g., 'a')
  robot.keyTap("a");
}

// Simulate actions every 5 secondsa
setInterval(simulateActions, 3000);
