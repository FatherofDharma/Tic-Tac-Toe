var winCond = [['a','b','c'], ['d','e','f'], ['g','h','i'], ['a','d','g'], ['b','e','h'], ['c','f','i'], ['a','e','i'], ['g','e','c']];

var player = ['f','c','g','a','i'];

function win() {

  for (var i = 0; i < winCond.length; i++) {
    var shouldBeAWin = 0;
    for (var n = 0; n < player.length; n++) {
      var thing = winCond[i].includes(player[n]);
      if (thing) {
        console.log(winCond[i] + " player has a " + player[n]);
        shouldBeAWin += 1;
      }
      console.log(thing);
      }
      if (shouldBeAWin === 3) {
        console.log("player wins");
        break;
    }
    console.log("go through the loop again.");
  }
}
