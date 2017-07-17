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

      $(".btn").on("click", function(){
        GameEnd.state = false;
        Player1.turn = true;
        Player1.taken = [];
        Player2.turn = false;
        Player2.taken = [];
        Game.possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        $("#1").empty().removeClass("colorX colorY");
        $("#2").empty().removeClass("colorX colorY");
        $("#3").empty().removeClass("colorX colorY");
        $("#4").empty().removeClass("colorX colorY");
        $("#5").empty().removeClass("colorX colorY");
        $("#6").empty().removeClass("colorX colorY");
        $("#7").empty().removeClass("colorX colorY");
        $("#8").empty().removeClass("colorX colorY");
        $("#9").empty().removeClass("colorX colorY");
        $("#message").empty().append('<p>Player 1, choose a square!</p>');
      });

      $("td").on("click", function(){
        // alert($(this).attr("id"));
        if(GameEnd.state === false){
        var $id = $(this).attr("id");
          $id = Number($id);
          if((Player1.turn === true) && $.inArray($id, Game.possible) > -1){
            $("#message").empty();
            Player1.taken.push($id);
            Game.possible.splice(Game.possible.indexOf($id), 1);
            Player1.taken.sort();
            ($(this).addClass("colorX"));
            ($(this).html(Player1.value));
            winner();
            changeTurns();
          } else if ((Player2.turn === true) && $.inArray($id, Game.possible) > -1) {
            $("#message").empty();
            Player2.taken.push($id);
            Game.possible.splice(Game.possible.indexOf($id), 1);
            Player2.taken.sort();
            ($(this).addClass("colorY"));
            ($(this).html(Player2.value));
            winner2();
            changeTurns();
          } else {
            $("#message").empty().append('<p>Can\'t click there!</p>');
          }
        } else {
          $("#message").empty().append('<p>The game is over. Restart the game to play again!</p>');
        }
      });

  function changeTurns(){
    Player1.turn = !(Player1.turn);
    Player2.turn = !(Player2.turn);
  }

  var GameEnd = {
    state: false
  }

  //call functions to check if player 1 wins

    function winner(){
      if(checkBoard()){
        $("#message").append('<p>Player 1 wins 123!</p>');
        GameEnd.state = true;
        console.log("Player 1 123!");
      } else if(checkBoard2()){
        $("#message").append('<p>Player 1 wins 456!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 456");
      } else if(checkBoard3()){
        $("#message").append('<p>Player 1 wins 789!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 789");
      } else if(checkBoard4()){
        $("#message").append('<p>Player 1 wins 147!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 147");
      } else if(checkBoard5()){
        $("#message").append('<p>Player 1 wins 258!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 258");
      } else if(checkBoard6()){
        $("#message").append('<p>Player 1 wins 369!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 369");
      } else if(checkBoard7()){
        $("#message").append('<p>Player 1 wins 357!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 357");
      } else if(checkBoard8()){
        $("#message").append('<p>Player 1 wins 159!</p>');
        GameEnd.state = true;
        console.log("PLayer 1 wins 159");
      } else {
        $("#message").empty().append('<p>Player 2, choose a square!</p>');
        console.log("no winner yet");
      }
    }

  //call functions to check if player 2 wins

  function winner2(){
    if(check2Board()){
      $("#message").empty().append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("Player 2 wins 123!");
    } else if(check2Board2()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 456");
    } else if(check2Board3()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 789");
    } else if(check2Board4()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 147");
    } else if(check2Board5()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 258");
    } else if(check2Board6()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 369");
    } else if(check2Board7()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 357");
    } else if(check2Board8()){
      $("#message").append('<p>Player 2 wins 123!</p>');
      GameEnd.state = true;
      console.log("PLayer 2 wins 159");
    } else {
      $("#message").empty().append('<p>Player 1, choose a square!</p>');
    }
  }

  //Check if player 1 wins

  function checkBoard(){
    // var arr = [1, 2, 3];
    if(Player1.taken.includes(1) && Player1.taken.includes(2) && Player1.taken.includes(3)){
      return true;
    }else {
      return false;
    }
  }

  function checkBoard2(){
    if(Player1.taken.includes(4) && Player1.taken.includes(5) && Player1.taken.includes(6)){
      return true;
    }else {
      return false;
    }
  }



  function checkBoard3(){
    if(Player1.taken.includes(7) && Player1.taken.includes(8) && Player1.taken.includes(9)){
      return true;
    }else {
      return false;
    }
  }

  function checkBoard4(){
    if(Player1.taken.includes(1) && Player1.taken.includes(4) && Player1.taken.includes(7)){
      return true;
    }else {
      return false;
    }
  }

  function checkBoard5(){
    if(Player1.taken.includes(2) && Player1.taken.includes(5) && Player1.taken.includes(8)){
      return true;
    }else {
      return false;
    }
  }

  function checkBoard6(){
    if(Player1.taken.includes(3) && Player1.taken.includes(6) && Player1.taken.includes(9)){
      return true;
    }else {
      return false;
    }
  }

  function checkBoard7(){
    if(Player1.taken.includes(3) && Player1.taken.includes(5) && Player1.taken.includes(7)){
      return true;
    }else {
      return false;
    }
  }

  function checkBoard8(){
    if(Player1.taken.includes(1) && Player1.taken.includes(5) && Player1.taken.includes(9)){
      return true;
    }else {
      return false;
    }
  }

//Check if player 2 wins

  function check2Board(){
    if(Player2.taken.includes(1) && Player2.taken.includes(2) && Player2.taken.includes(3)){
      return true;
    }else {
      return false;
    }
  }


  function check2Board2(){
    if(Player2.taken.includes(4) && Player2.taken.includes(5) && Player2.taken.includes(6)){
      return true;
    }else {
      return false;
    }
  }

  function check2Board3(){
    if(Player2.taken.includes(7) && Player2.taken.includes(8) && Player2.taken.includes(9)){
      return true;
    }else {
      return false;
    }
  }

  function check2Board4(){
    if(Player2.taken.includes(1) && Player2.taken.includes(4) && Player2.taken.includes(7)){
      return true;
    }else {
      return false;
    }
  }

  function check2Board5(){
    if(Player2.taken.includes(2) && Player2.taken.includes(5) && Player2.taken.includes(8)){
      return true;
    }else {
      return false;
    }
  }

  function check2Board6(){
    if(Player2.taken.includes(3) && Player2.taken.includes(6) && Player2.taken.includes(9)){
      return true;
    }else {
      return false;
    }
  }

  function check2Board7(){
    if(Player2.taken.includes(3) && Player2.taken.includes(5) && Player2.taken.includes(7)){
      return true;
    }else {
      return false;
    }
  }

  function check2Board8(){
    if(Player2.taken.includes(1) && Player2.taken.includes(5) && Player2.taken.includes(9)){
      return true;
    }else {
      return false;
    }
  }

});
