// coordonné et vitesse du cercle
var x = 100
var y = 100
var v = 2
//coordonné de la pomme
let px, py 
//direction du cercle
let dire = "haut"
//variable du nombre de cercle qui suive
let n = 1
let ver = []


function setup(){
    //l'interface de jeu
    createCanvas(400,400);
    // /mettre ver[i] a vide et initier la boucle
    for(i = 0; i < n; i = i + 1){
        ver[i] = {}
    }
    // coordonné aléatoir de la pomme
    px = random(400);
    py = random(400);
    
}

 function keyPressed() {
    // touche directionelle
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

function draw(){
//excecution des function
    dessiner();
    pose();
}

function dessiner() {
    // dessiner tout les cercle a l'aide de la boucle
 background(0);
 fill(0,255,0);
 for(i = n - 1; i >= 0; i = i-1){
     circle(ver[i].x, ver[i].y, 25);
 }
 // dessiner aléatoirement la pomme
 fill(255,0,0)
 square(px, py, 25)
}

function pose(){
// que font les directions
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
//coordonné du cercle de tête
 ver[0].x  = x;
 ver[0].y  = y;
//boucle des coordonné des cercles de queues
  for(i = n - 1; i >= 1; i = i - 1){
    ver[i] = {
        x: ver[i-1].x,
        y: ver[i-1].y,
    }

 }
 //augmenter le nombre de cercle
 if(x < px+25 && x > px && y < py+25 && y > py){
    ver[n] = {};
    n = n + 1;
     //changer la pomme de place
    px = random(350);
    py = random(350);
   
 }
}