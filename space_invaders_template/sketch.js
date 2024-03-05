
// Replace the gameObject variable with our new Player

let player = new Player(320, 420, 20, 20); // +ADDED
// let gameObject = new GameObject(320, 420, 20, 20); -REMOVED

function setup() 
{
  createCanvas(640, 480);
}

function draw() 
{

    background(0);
  // Replace gameObject.draw() with our new player.draw();

  player.draw(); // +ADDED
  // - REMOVED: gameObject.draw(); -REMOVED
}