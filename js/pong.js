const ball = document.createElement('div')
const Lpaddle = document.createElement('div')
const Rpaddle = document.createElement('div')
const scoreboard = document.createElement('div')
document.body.appendChild(scoreboard)
document.body.appendChild(Lpaddle)
document.body.appendChild(Rpaddle)
let LpaddleWidth = 20
let LpaddleHeight = 150
const ballRadius = 25
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 10
let ballXDirection = 1
let ballYDirection = 1
let gameInterval = null;
//-----------------------------------------------------------//
let LpaddleYPosition = windowHeight / 2 - LpaddleHeight / 2
let LpaddleYDirection = 15
let LpaddleMovingUp = false;
let LpaddleMovingDown = false;
//-----------------------------------------------------------//
let RpaddleWidth = 20;
let RpaddleHeight = 150;
let RpaddleYPosition = windowHeight / 2 - RpaddleHeight / 2;
let RpaddleYDirection = 15;
let RpaddleMovingUp = false;
let RpaddleMovingDown = false;
//-----------------------------------------------------------//
let leftScore = 0;
let rightScore = 0;
//-----------------------------------------------------------//
scoreboard.style.position = 'absolute';
scoreboard.style.top = '20px';
scoreboard.style.left = '50%';
scoreboard.style.transform = 'translateX(-50%)';
scoreboard.style.color = 'black';
scoreboard.style.fontSize = '24px';
scoreboard.style.fontFamily = 'Arial, sans-serif';
//-----------------------------------------------------------//
const startButton = document.createElement('button');
const playAgainButton = document.createElement('button');
startButton.textContent = "Start Game";
playAgainButton.textContent = "Play Again";
playAgainButton.style.display = "none";
document.body.appendChild(startButton);
document.body.appendChild(playAgainButton);
//----------------------------------------------------------//
[startButton, playAgainButton].forEach(button => {
    button.style.position = "absolute";
    button.style.top = "50%";
    button.style.left = "50%";
    button.style.transform = "translate(-50%, -50%)";
    button.style.padding = "10px 20px";
    button.style.fontSize = "18px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "5px";
    button.style.border = "none";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
});

startButton.addEventListener('click', () => {
    startButton.style.display = "none"; // Hide the start button
    gameInterval = setInterval(moveBall, 10); // Save the interval ID
    createBall();
    createLpaddle();
    createRpaddle();
    updateScoreboard();
});

function checkForWinner() {
    if (leftScore === 5) {
        alert("Left Player Wins!");
        endGame();
        leftScore = 0; // Reset scores
        rightScore = 0;
    }
    if (rightScore === 5) {
        alert("Right Player Wins!");
        endGame();
        leftScore = 0; // Reset scores
        rightScore = 0;
    }
}

function endGame() {
    playAgainButton.style.display = "block"; // Show "Play Again" button
    clearInterval(gameInterval); // Stop the ball movement
}

playAgainButton.addEventListener('click', () => {
    playAgainButton.style.display = "none"; // Hide the "Play Again" button

    leftScore = 0; // Reset scores
    rightScore = 0;
    updateScoreboard();
    resetBall(); // Reset the ball's position
    startButton.style.display = "block"; // Show "Start Game" button again
});
//----------------------------------------------------------------------------------------//

function updateScoreboard() {
    scoreboard.innerHTML = `Left: ${leftScore} | Right: ${rightScore}`;
}

createBall();
createLpaddle();
createRpaddle();

function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    // Bounce the ball off the top and bottom walls
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection *= -1;
    }

    // Check collision with the left paddle
    if (
        ballXPosition <= 50 + LpaddleWidth &&
        ballYPosition + 2 * ballRadius >= LpaddleYPosition &&
        ballYPosition <= LpaddleYPosition + LpaddleHeight
    ) {
        ballXDirection *= -1;
        ballXPosition = 50 + LpaddleWidth; // Prevent ball from sticking
    }

    // Check collision with the right paddle
    if (
        ballXPosition + 2 * ballRadius >= windowWidth - 50 - RpaddleWidth &&
        ballYPosition + 2 * ballRadius >= RpaddleYPosition &&
        ballYPosition <= RpaddleYPosition + RpaddleHeight
    ) {
        ballXDirection *= -1;
        ballXPosition = windowWidth - 50 - RpaddleWidth - 2 * ballRadius; // Prevent ball from sticking
    }

    // Check if the ball goes off the left side
    if (ballXPosition < 0) {
        rightScore++;
        resetBall();
    }

    // Check if the ball goes off the right side
    if (ballXPosition > windowWidth - 2 * ballRadius) {
        leftScore++;
        resetBall();
    }

    // Update the scoreboard and check for a winner
    updateScoreboard();
    checkForWinner(); // Check winner after updating the score
}


function resetBall() {
    ballXPosition = windowWidth / 2 - ballRadius;
    ballYPosition = windowHeight / 2 - ballRadius;
    ballXDirection *= -1; // Reverse the direction
    ballYDirection = Math.random() > 0.5 ? 1 : -1; // Randomize the vertical direction
}


function createLpaddle() {
    Lpaddle.style.height = `${LpaddleHeight}px`;
    Lpaddle.style.width = `${LpaddleWidth}px`;
    Lpaddle.style.backgroundColor = `blue`;
    Lpaddle.style.position = 'absolute';
    Lpaddle.style.left = "50px";
    Lpaddle.style.top = `${LpaddleYPosition}px`;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'w') {
            LpaddleMovingUp = true;
        }
        if (event.key === 's') {
            LpaddleMovingDown = true;
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'w') {
            LpaddleMovingUp = false;
        }
        if (event.key === 's') {
            LpaddleMovingDown = false;
        }
    });

    requestAnimationFrame(updateLpaddle);
}

function updateLpaddle() {
    if (LpaddleMovingUp) {
        LpaddleYPosition -= LpaddleYDirection;
    }
    if (LpaddleMovingDown) {
        LpaddleYPosition += LpaddleYDirection;
    }

    if (LpaddleYPosition < 0) {
        LpaddleYPosition = 0;
    }
    if (LpaddleYPosition > windowHeight - LpaddleHeight) {
        LpaddleYPosition = windowHeight - LpaddleHeight;
    }

    Lpaddle.style.top = `${LpaddleYPosition}px`;

    requestAnimationFrame(updateLpaddle);
}

//----------------------------------------------------//
function createRpaddle() {
    Rpaddle.style.height = `${RpaddleHeight}px`;
    Rpaddle.style.width = `${RpaddleWidth}px`;
    Rpaddle.style.backgroundColor = `red`;
    Rpaddle.style.position = 'absolute';
    Rpaddle.style.right = "50px";
    Rpaddle.style.top = `${RpaddleYPosition}px`;

    document.body.appendChild(Rpaddle);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            RpaddleMovingUp = true;
        }
        if (event.key === 'ArrowDown') {
            RpaddleMovingDown = true;
        }
    });

    // Keyup event to stop movement
    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            RpaddleMovingUp = false;
        }
        if (event.key === 'ArrowDown') {
            RpaddleMovingDown = false;
        }
    });

    requestAnimationFrame(updateRpaddle);
}

function updateRpaddle() {
    if (RpaddleMovingUp) {
        RpaddleYPosition -= RpaddleYDirection;
    }
    if (RpaddleMovingDown) {
        RpaddleYPosition += RpaddleYDirection;
    }

    if (RpaddleYPosition < 0) {
        RpaddleYPosition = 0;
    }
    if (RpaddleYPosition > windowHeight - RpaddleHeight) {
        RpaddleYPosition = windowHeight - RpaddleHeight;
    }

    Rpaddle.style.top = `${RpaddleYPosition}px`;

    requestAnimationFrame(updateRpaddle);
}

