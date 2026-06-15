var py = [],
  px = [];
var dir = [];
var espece = [];
var nbpoisson = 1;
var score = 0;
var vie = 10;

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < nbpoisson; i = i + 1) {
    const fish = genere();
    py[i] = fish.y;
    px[i] = fish.x;
    dir[i] = fish.d;
    espece[i] = fish.e;
  }
}

function draw() {
  background(220);
  soleil();
  bateau();
  verifie();
  affichescore();
  aficevie();
  for (i = 0; i < nbpoisson; i = i + 1) {
    if (dir[i] < 0) {
      poisson_m(px[i], py[i], espece[i]);
    } else {
      poisson_d(px[i], py[i], espece[i]);
    }
    py[i] = py[i] + dir[i];
    if (py[i] <= 50) {
      dir[i] = -dir[i];
    }
    if (py[i] >= height) {
      dir[i] = -dir[i];
      px[i] = random(0, width);
      vie = vie - 1;
      if (vie == 0) {

        stroke(0,0,0)
        fill(0,0,0)
        textSize(60);
        text("GAME OVER", 0, 200);
        
        noLoop();
      }
    }
  }
 mer();
}
function genere() {
  const hasard = random(0, 10);
  let esp = 0;        // par défaut, espèce de poisson = normal
  if(hasard > 7) {
      esp = 1;        // exceptionnellement espèce = gold
  }
  return {
    y: random(height / 2, height),
    x: random(0, width),
    d: -2,
    e: esp 
  }
}

function verifie() {
  for (i = 0; i < nbpoisson; i = i + 1) {
    if (py[i] >= 180 && py[i] <= 190) {
      if (px[i] >= mouseX && px[i] <= mouseX + 50) {
        if (espece[i] == 0){
          score = score + 1;
        } else {
          score = score + 5
        }
        
        py[i] = height - 20;
        px[i] = random(0, width);
        dir[i] = -2;
        if (score % 5 == 0) {
          nbpoisson = nbpoisson + 1;
          const fish = genere();
          py[nbpoisson - 1] = fish.y;
          px[nbpoisson - 1] = fish.x;
          dir[nbpoisson - 1] = fish.d;
          espece[nbpoisson - 1] = fish.e;
        }
        if(score % 5 == 0) {
          vie = vie + 1;
        }
      }
    }
  }
}

function bateau() {
  fill(250, 120, 50);
  stroke(250, 120, 50);
  var col = mouseX;
  quad(col, 180, col + 50, 180, col + 40, 200, col + 10, 200);
}

function poisson_m(px, py, esp) {
  console.log("DEBUG",esp);
  if (esp == 0){
    fill(0,0,255);
    stroke(0,0,255);
  }
  if (esp == 1){
    fill(200,255,0);
    stroke(200,255,0);
  }
  triangle(px - 10, py + 10, px, py, px + 10, py + 10);
  ellipse(px, py - 12, 15, 30);
}

function poisson_d(px, py, esp) {
  if (esp == 0){
    fill(0,0,255);
    stroke(0,0,255);
  }
  if (esp == 1){
    fill(200,255,0);
    stroke(200,255,0);
  }
  triangle(px - 10, py - 10, px, py, px + 10, py - 10);
  ellipse(px, py + 12, 15, 30);
}


function mer() {
  fill(0, 0, 250);
  stroke(0, 0, 250);
  rect(0, height / 2, width, height);
}

function soleil() {
  fill(250, 250, 0);
  stroke(250, 250, 0);
  circle(width - 50, 50, 50);
}

function aficevie() {
  fill(0,0,0);
  stroke(0,0,0);
  text(vie, 300, 15);
}
function affichescore() {
  fill(0,0,0);
  stroke(0,0,0);
  text(score, 5, 15);
}

