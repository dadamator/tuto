var x = 100
var y = 100
var v = 1
var d = 1
 
let dire = "haut"

function setup(){
 createCanvas(400,400);
}

function draw(){
 background(0);
 fill(0,255,0);
 circle(x, y, 50);


 if(dire == "haut" && y > 25){
 y = y-v
 }
 if(dire == "bas" && y < 375){
 y = y+v
 }
 if(dire == "left" && x > 25){
 x = x-d
 }
 if(dire == "droit" && x < 375){
 x = x+d
 }
}

 function keyPressed() {
 if (keyCode === UP_ARROW){
 dire = "haut"
 } else if (keyCode === DOWN_ARROW) {
 dire = "bas"
 } else if (keyCode === LEFT_ARROW) {
 dire = "left"
 } else if (keyCode === RIGHT_ARROW) {
  dire = "droit"
 }
}
