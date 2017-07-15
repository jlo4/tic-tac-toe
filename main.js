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
            Player1.taken.sort();
            console.log("Player1 sorted array: " + Player1.taken);
            console.log(typeof Player1.taken);
            // console.log("Player1 clicked on: " + $id);
            ($(this).html(Player1.value));
            winner();
            changeTurns();
          } else if ((Player2.turn === true) && $.inArray($id, Game.possible) > -1) {
            Player2.taken.push($id);
            console.log("Position of $id = " + Game.possible.indexOf($id));
            Game.possible.splice(Game.possible.indexOf($id), 1);
            console.log("New possible array =" + Game.possible);
            console.log("Player1 took: " + Player2.taken);
            Player2.taken.sort();
            console.log("Player1 sorted array: " + Player2.taken);
            console.log(typeof Player2.taken);
            $(this).html(Player2.value);
            winner2();
            changeTurns();
          } else {
            console.log("Something wrong");
          }
      });

  function changeTurns(){
    Player1.turn = !(Player1.turn);
    Player2.turn = !(Player2.turn);
  }

//Check if player 1 wins

  function checkBoard(){
    var arr = [1, 2, 3];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }


  function checkBoard2(){
    var arr = [4, 5, 6];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function checkBoard3(){
    var arr = [7, 8, 9];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function checkBoard4(){
    var arr = [1, 4, 7];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function checkBoard5(){
    var arr = [2, 5, 8];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function checkBoard6(){
    var arr = [3, 6, 9];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function checkBoard7(){
    var arr = [3, 5, 7];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function checkBoard8(){
    var arr = [1, 5, 9];
    if(Player1.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player1.taken.length; i++){
        if(Player1.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

//Check if player 2 wins

  function check2Board(){
    var arr = [1, 2, 3];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }


  function check2Board2(){
    var arr = [4, 5, 6];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function check2Board3(){
    var arr = [7, 8, 9];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function check2Board4(){
    var arr = [1, 4, 7];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function check2Board5(){
    var arr = [2, 5, 8];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function check2Board6(){
    var arr = [3, 6, 9];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function check2Board7(){
    var arr = [3, 5, 7];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

  function check2Board8(){
    var arr = [1, 5, 9];
    if(Player2.taken.length !== arr.length){
        return false;
    } for(var i = 0; i < Player2.taken.length; i++){
        if(Player2.taken[i] !== arr[i]){
          return false;
        }
    }
    return true;
  }

//call functions to check if player 1 wins

  function winner(){
    if(checkBoard()){
      console.log("Player 1 123!");
    } else if(checkBoard2()){
      console.log("PLayer 1 wins 456");
    } else if(checkBoard3()){
      console.log("PLayer 1 wins 789");
    } else if(checkBoard4()){
      console.log("PLayer 1 wins 147");
    } else if(checkBoard5()){
      console.log("PLayer 1 wins 258");
    } else if(checkBoard6()){
      console.log("PLayer 1 wins 369");
    } else if(checkBoard7()){
      console.log("PLayer 1 wins 357");
    } else if(checkBoard8()){
      console.log("PLayer 1 wins 159");
    } else {
      console.log("no winner yet");
    }
  }

//call functions to check if player 2 wins

function winner2(){
  if(check2Board()){
    console.log("Player 2 wins 123!");
  } else if(check2Board2()){
    console.log("PLayer 2 wins 456");
  } else if(check2Board3()){
    console.log("PLayer 2 wins 789");
  } else if(check2Board4()){
    console.log("PLayer 2 wins 147");
  } else if(check2Board5()){
    console.log("PLayer 2 wins 258");
  } else if(check2Board6()){
    console.log("PLayer 2 wins 369");
  } else if(check2Board7()){
    console.log("PLayer 2 wins 357");
  } else if(check2Board8()){
    console.log("PLayer 2 wins 159");
  } else {
    console.log("no winner yet");
  }
}

  // var checkBoard = function(array) {
  //   array.forEach(function(el){
  //     console.log("Player 1 array = " + array.indexOf(el));
  //   })
  // };
  //
  // Turn();

  // $("td").on("click", function(){
  //   alert($(this).attr("id"));
  //   console.log()
  // });


});
