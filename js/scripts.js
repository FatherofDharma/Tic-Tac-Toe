// these are our win conditions
var winCond = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['a', 'd', 'g'], ['b', 'e', 'h'], ['c', 'f', 'i'], ['a', 'e', 'i'], ['g', 'e', 'c']];

function Game() {
  this.players = [];
  this.currentPlayer = 0;
}

function Player(mark, myTurn, id) {
  this.moves = [],
  this.mark = mark;
  this.myTurn = myTurn;
  this.id = id;
}

var newGame = new Game();
//create our players
var misterX = new Player('X', true, 0);
newGame.players.push(misterX);
var misterO = new Player('O', false, 1);
newGame.players.push(misterO);

// switch players
Player.prototype.switchTurn = function () {
  if (this.id === 0) {
    newGame.currentPlayer = 1;
  } else {
    newGame.currentPlayer = 0;
  }

  console.log(this.mark + ' turn is over.');
}

//display whose turn it is

// reset game board


var player = ['b', 'c', 'a', 'g', 'd'];


//this evaluates the players moves and determines if they have won
Player.prototype.win = function () {
  for (var i = 0; i < winCond.length; i++) {
    var shouldBeAWin = 0;
    for (var n = 0; n < this.moves.length; n++) {
      var thing = winCond[i].includes(this.moves[n]);
      if (thing) {
        //console.log(winCond[i] + ' player has a ' + this.moves[n]);
        shouldBeAWin += 1;
      }

      //console.log(thing);
    }

    console.log(shouldBeAWin);
    if (shouldBeAWin === 3) {
      console.log(this.mark + ' wins');
      $('.nerd').text(this.mark + ' is the biggest nerd because ' + this.mark + ' won the game!')
      $('div').removeClass('click');
      break;
    } else if (this.moves.length === 5) {
      $('.nerd').text('Both X and O now have KTDs because they failed to win!')
    }

    //  console.log('go through the loop again.');
  }
}










var count = 0;


//User Interface Logic Section
$(document).ready(function () {
  $('.click').click(function () {
    console.log();
    if ($(this).hasClass('click')) {
      var spaceValue = $(this)[0].id;
      console.log(spaceValue);
      $(newGame.players[newGame.currentPlayer].moves.push(spaceValue));
      $(this).text(newGame.players[newGame.currentPlayer].mark);
      $(this).removeClass('click');
      newGame.players[newGame.currentPlayer].win();
      newGame.players[newGame.currentPlayer].switchTurn();
    } else {
      console.log('FAIL');
      count += 1;
    }
    if (count === 5) {
      $('.nerd').text(newGame.players[newGame.currentPlayer].mark + ' is the biggest nerd because ' + newGame.players[newGame.currentPlayer].mark + ' won the game!')
      $('div').removeClass('click');
    }
  });
});
