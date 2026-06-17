var x = 100
var y = 100
var v = 2
// coordonné et vitesse du cercle
let px, py 
//coordonné de la pomme
let dire = "haut"
//direction du cercle
let n = 1
let ver = []
//variable du nombre de cercle qui suive

function setup(){
    createCanvas(400,400);
    //l'interface de jeu
    for(i = 0; i < n; i = i + 1){
        ver[i] = {}
    }
    //mettre ver[i] a vide et initier la boucle
    px = random(400);
    py = random(400);
    // coordonné aléatoir de la pomme
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
    // touche directionelle
}

function draw(){
    dessiner();
    pose();
    //excecution des function
}

function dessiner() {
 background(0);
 fill(0,255,0);
 for(i = n - 1; i >= 0; i = i-1){
     circle(ver[i].x, ver[i].y, 25);
 }
 // dessiner tout les cercle a l'aide de la boucle
 fill(255,0,0)
 square(px, py, 25)
 // dessiner aléatoirement la pomme
}

function pose(){

 if(dire == "haut" && y > 25){
 y = y-v
 }
 if(dire == "bas" && y < 375){
 y = y+v
 }
 if(dire == "left" && x > 25){
 x = x-v
 }
 if(dire == "droit" && x < 375){
 x = x+v
 }
// que font les directions
 ver[0].x  = x;
 ver[0].y  = y;
//coordonné du cercle de tête
  for(i = n - 1; i >= 1; i = i - 1){
    ver[i] = {
        x: ver[i-1].x,
        y: ver[i-1].y,
    }
//boucle des coordonné des cercles de queues
 }
 if(x < px+25 && x > px && y < py+25 && y > py){
    ver[n] = {};
    n = n + 1;
    //augmenter le nombre de cercle
    px = random(350);
    py = random(350);
    //changer la pomme de place
 }
}