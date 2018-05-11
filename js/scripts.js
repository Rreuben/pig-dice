//Business Logic
var player1 = '';
var player2 = '';



//User Interface
$(document).ready(function() {

  $('button#startBtn').click(function(event) {
    $('.startMenu').hide();
    $('.playerConsole').show();
  });

  $('button#newGameBtn').click(function(event) {
    $('.startMenu').show();
    $('.playerConsole').hide();
  });

});
