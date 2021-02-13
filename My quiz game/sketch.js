var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var title;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

}
