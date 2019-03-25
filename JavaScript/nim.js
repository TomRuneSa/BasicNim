var total;
var maxGrab;
var player1;
var player2;

class Nim{
  constructor(player1, player2, total, maxGrab){
    this.player1 = player1;
    this.player2 = player2;
    this.total = total;
    this.maxGrab = maxGrab;
  }

  get getPlayer1(){
    return this.player1;
  }

  get getPlayer2(){
    return this.player2;
  }

  get getTotal(){
    return this.total;
  }

  get getMaxGrab(){
    return this.maxGrab;
  }
}
