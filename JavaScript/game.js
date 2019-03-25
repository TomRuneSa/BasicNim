
var player1;
var player2;
var numOfBalls;
var maxGrab;
var colors = ["red", "blue", "yellow", "magenta", "green", "brown","purple","pink"];
var index = 0;

  function startGame(){
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;
    numOfBalls = document.getElementById('numOfBalls').value;
    maxGrab = document.getElementById('maxGrab').value;

    const nim = new Nim(player1, player2, numOfBalls, maxGrab);



    document.getElementById('counter').innerHTML = nim.getTotal;


    if(player1 === ""){
      player1 = "player1";
      document.getElementById('firstPlayer').innerHTML = "Player1 sin tur"
    }else{
      document.getElementById('firstPlayer').innerHTML = nim.getPlayer1 + " sin tur";

    }

    if(player2 === ""){
      player2 = "player2";
      document.getElementById('secondPlayer').innerHTML = "Player2 sin tur"
    }else{
      document.getElementById('secondPlayer').innerHTML = nim.getPlayer2 + " sin tur";

    }

    createButtonsPlayers1();
    createButtonsPlayers2();

    document.getElementById('myForm').style.display = "none";

    document.getElementById('game').style.display = "block";

  };

  function gameLogic(value, player){

    var newValue = numOfBalls-value;

    if(player === "player1"){

      if(newValue <= 0){

        won(player1);

        document.getElementById('counter').innerHTML = "0";

      }else {

        numOfBalls = numOfBalls-value;

        document.getElementById('counter').innerHTML = numOfBalls;
        if(index >= colors.length){
          index = 0;
        }
        document.getElementById('counter').style.color = colors[index];
        index = index+1;

        document.getElementById('player1Button').style.display = "none";
        document.getElementById('player2Button').style.display = "block";

        }


    } else {

      if(newValue <= 0){

        won(player2);

        document.getElementById('counter').innerHTML = "0";


      } else{
        numOfBalls = numOfBalls-value;

        document.getElementById('counter').innerHTML = numOfBalls;
        if(index >= colors.length){
          index = 0;
        }
        document.getElementById('counter').style.color = colors[index];

        index = index+1;

        document.getElementById('player1Button').style.display = "block";
        document.getElementById('player2Button').style.display = "none";
      }

  }


  }


  function won(player){

    document.getElementById('won').innerHTML = player + " WON!!!!!!!!!!!"

    document.getElementById('player1Button').style.display = "none";
    document.getElementById('player2Button').style.display = "none";
    document.getElementById('counter').style.display = "none";

    document.getElementById('game').style.backgroundImage = "url('../Pictures/victory.jpg')";


  }

  function createButtonsPlayers1(){
    for (var i = 0; i < maxGrab; i++){

      var btn = document.createElement("BUTTON");
      btn.classList.add('button1');        // Create a <button> element
      var t = document.createTextNode(i+1);

      btn.appendChild(t)
      btn.setAttribute("id", i+1);
      btn.setAttribute('onclick','gameLogic('+(i+1)+',"player1")');

      var element = document.getElementById("player1Button");
      element.appendChild(btn);

    }

  }

  function createButtonsPlayers2(){
    for (var i = 0; i < maxGrab; i++){


      var btn = document.createElement("BUTTON" );
      btn.classList.add('button2');        // Create a <button> element
      var t = document.createTextNode(i+1);                 // Create a text node

      btn.appendChild(t);
      btn.setAttribute("id", i+1);
      btn.setAttribute('onclick','gameLogic('+(i+1)+',"player2")')



      var element = document.getElementById("player2Button");
      element.appendChild(btn);                  // Append <button> to <body>
    }

  }
