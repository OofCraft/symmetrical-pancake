var canvas;

var gameState=0;
var memberCount, database, quiz, question, member;



function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();

  quiz = new Quiz(100,100);
}


function draw(){
  background("pink");

  
}
