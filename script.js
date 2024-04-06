function rollDice() {
  var dice1Value = Math.floor(Math.random() * 6) + 1;
  var dice2Value = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").src = "./images/dice" + dice1Value + ".png";
  document.getElementById("dice2").src = "./images/dice" + dice2Value + ".png";

  var player1Score = parseInt(
    document.getElementById("player1Score").innerText
  );
  var player2Score = parseInt(
    document.getElementById("player2Score").innerText
  );

  var difference = Math.abs(dice1Value - dice2Value);
  if (dice1Value > dice2Value) {
    player1Score += difference;
  } else if (dice2Value > dice1Value) {
    player2Score += difference;
  }

  document.getElementById("player1Score").innerText = player1Score;
  document.getElementById("player2Score").innerText = player2Score;

  checkWinner(player1Score, player2Score);
}

function checkWinner(score1, score2) {
  var winningScore = 30; // Change this to your desired winning score
  if (score1 >= winningScore || score2 >= winningScore) {
    if (score1 > score2) {
      alert("Player 1 wins!");
    } else if (score2 > score1) {
      alert("Player 2 wins!");
    } else {
      alert("It's a tie!");
    }
    // Reset the game
    resetGame();
  }
}

function resetGame() {
  // Reset dice images to initial state
  document.getElementById("dice1").src = "./images/dice1.png";
  document.getElementById("dice2").src = "./images/dice1.png";

  // Reset player scores to 0
  document.getElementById("player1Score").innerText = 0;
  document.getElementById("player2Score").innerText = 0;
}
