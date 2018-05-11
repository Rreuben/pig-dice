//Business Logic
var player1 = '';
var player2 = '';

var throwDice = () => Math.floor( 6 * Math.random()) + 1;


//User Interface
$(document).ready(function() {

  $('button#startBtn').click(function(event) {
    $('.startMenu').hide();
    $('.playerConsole').show();

    var player1Name = $('.player1Name').val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

  });

  $('button#newGameBtn').click(function(event) {
    $('.startMenu').show();
    $('.playerConsole').hide();
  });


});
