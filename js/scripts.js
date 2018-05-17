//Business Logic
var player1="";
var player2="";


// The dice
var diceRoll = function () {
  return Math.floor( Math.random() * 6 ) + 1;
}


// The object
function Player(turn) {
  this.playerName;
  this.totalScore = 0;
  this.currentScore = 0;
  this.roll = 0;
  this.turn = turn;
}


// Checks for 1

Player.prototype.rollOne = function () {
  if( this.roll === 1 ) {
    this.currentScore = 0;
      alert( 'Sorry! ' + this.playerName + ', you rolled 1!' );
  } else {
    this.currentScore += this.totalScore;
  }
};


// Hold

Player.prototype.hold = function () {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
    alert(this.playerName + ', pass the mouse, child!')
};


// // Turn Changing

Player.prototype.winnerCheck = function () {
  if( this.totalScore >= 50 ) {
    alert(this.playerName + '. You win lol!')
  }
};

Player.prototype.newGame = function () {
  this.playerName = '';
  this.totalScore = 0;
  this.currentScore = 0;
  this.roll = 0;
};

var clearValues = function () {
  $( '.player1Name').val('');
  $( '.player2Name').val('');
}



//User Interface
$(document).ready(function() {

  $( 'button#startBtn' ).click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $('.startMenu').hide();
    $('.playerConsole').show();

    var player1Name = $('.player1Name').val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player1.playerName = player1Name;

  });

  $( 'button#newGameBtn' ).click(function(event) {
    $( '.playerConsole' ).hide();
    $( '.startMenu' ).show();
    clearValues();
    player1.newGame();
    player2.newGame();
    $( '#totalScore1' ).empty();
    $( '#totalScore2' ).empty();
    $( '#currentScore1' ).empty();
    $( '#currentScore2' ).empty();

  });

  $( 'button#player1-roll' ).click(function(event) {
    player1.roll = diceRoll();
    $( '#diceRoll1' ).text(player1.roll);
    player1.rollOne();
    $( '#currentScore1').text(player1.currentScore);
  });

  $( 'button#player2-roll' ).click(function(event) {
    player2.roll = diceRoll();
    $( '#diceRoll2' ).text(player2.roll);
      player2.rollOne();
    $( '#currentScore2').text(player2.currentScore);
  });
  $( 'button#player1-hold' ).click(function(event) {
    player1.hold();
    $( '#totalScore1' ).text(player1.totalScore);
    $( '#currentScore1' ).empty();
    player1.winnerCheck();
  });
  $( 'button#player2-hold' ).click(function(event) {
    player2.hold();
    $( '#totalScore2' ).text(player2.totalScore);
    $( '#currentScore2' ).empty();
    player2.winnerCheck();
  });
});
