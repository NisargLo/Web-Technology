// JavaScript for the Snake game

// Game canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Constants
const GRID_SIZE = 20;
const CANVAS_SIZE = 400;
const SNAKE_SPEED = 200; // milliseconds

// Initial snake position and velocity
let snake = [{ x: 10, y: 10 }];
let velocity = { x: 0, y: 0 };

// Initial food position
let food = generateFoodPosition();

// Start the game
let gameLoop = setInterval(update, SNAKE_SPEED);

// Handle key presses
document.addEventListener("keydown", changeDirection);

function update() {
     // Move the snake
     moveSnake();

     // Check if the game is over
     if (checkCollision()) {
          clearInterval(gameLoop);
          alert("Game Over! Your score: " + (snake.length - 1));
          return;
     }

     // Check if snake eats the food
     if (snake[0].x === food.x && snake[0].y === food.y) {
          snake.push({ ...snake[snake.length - 1] });
          food = generateFoodPosition();
     }

     // Clear canvas
     ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

     // Draw food
     ctx.fillStyle = "red";
     ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

     // Draw snake
     ctx.fillStyle = "green";
     snake.forEach(segment => {
          ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
     });
}

function moveSnake() {
     // Create a new head based on the current head and velocity
     let newHead = {
          x: snake[0].x + velocity.x,
          y: snake[0].y + velocity.y
     };

     // Add the new head to the beginning of the snake
     snake.unshift(newHead);

     // Remove the tail segment
     snake.pop();
}

function checkCollision() {
     // Check if snake hits the wall
     if (
          snake[0].x < 0 || snake[0].x >= CANVAS_SIZE / GRID_SIZE ||
          snake[0].y < 0 || snake[0].y >= CANVAS_SIZE / GRID_SIZE
     ) {
          return true;
     }

     // Check if snake hits itself
     for (let i = 1; i < snake.length; i++) {
          if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
               return true;
          }
     }

     return false;
}

function generateFoodPosition() {
     return {
          x: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
          y: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE))
     };
}

function changeDirection(event) {
     switch (event.key) {
          case "ArrowUp":
               if (velocity.y !== 1) {
                    velocity = { x: 0, y: -1 };
               }
               break;
          case "ArrowDown":
               if (velocity.y !== -1) {
                    velocity = { x: 0, y: 1 };
               }
               break;
          case "ArrowLeft":
               if (velocity.x !== 1) {
                    velocity = { x: -1, y: 0 };
               }
               break;
          case "ArrowRight":
               if (velocity.x !== -1) {
                    velocity = { x: 1, y: 0 };
               }
               break;
     }
}
