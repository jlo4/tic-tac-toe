$(document).ready(function(){

  var Player1 = {
    turn: true,
    value: 'X',
    taken: []
  }

  var Player2 = {
    turn: false,
    value: 'O',
    taken: []
  }

  var Game = {
  init: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  possible:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }




      $("td").on("click", function(){
        // alert($(this).attr("id"));
        var $id = $(this).attr("id");
          $id = Number($id);
          if((Player1.turn === true) && $.inArray($id, Game.possible) > -1){
            Player1.taken.push($id);
            console.log(typeof $id);
            // $id = $id - 1
            // Game.possible.splice($id, 1);
            console.log("Position of $id = " + Game.possible.indexOf($id));
            Game.possible.splice(Game.possible.indexOf($id), 1);
            console.log("New possible array =" + Game.possible);

            // console.log("Possible moves= " + Game.possible);
            console.log("Player1 took: " + Player1.taken);
            // console.log("Player1 clicked on: " + $id);
            ($(this).html(Player1.value));

            changeTurns();
            checkBoard(Player1.taken);
          } else if ((Player2.turn === true) && $.inArray($id, Game.possible) > -1) {
            Player2.taken.push($id);
            console.log("Position of $id = " + Game.possible.indexOf($id));
            Game.possible.splice(Game.possible.indexOf($id), 1);
            console.log("New possible array =" + Game.possible);
            $(this).html(Player2.value);
            changeTurns();
          } else {
            console.log("Something wrong");
          }
      });

  function changeTurns(){
    Player1.turn = !(Player1.turn);
    Player2.turn = !(Player2.turn);
  }

  var checkBoard = function(array) {
    array.forEach(function(el){
      console.log("Player 1 array = " + array.indexOf(el));
    })
  };
  //
  // Turn();

  // $("td").on("click", function(){
  //   alert($(this).attr("id"));
  //   console.log()
  // });


});
