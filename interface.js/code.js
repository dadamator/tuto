var x = 180

let etat = "masquer"

function setup() {
  createCanvas(400, 400);
  

  let button = createButton('hello');
  button.position(0, 80);
  
  button.mousePressed(texte);
  
}
  
  function texte(){
      if(etat == "masquer"){
        etat = "afficher";
      } else { 
        etat = "masquer";
      }
}

function draw() {
  clear();
  background(0,0,0);
  textSize(25);
  fill(100,100,100);
  let button = createButton('good bye');
  button.position(180,150) 
  if(etat == "afficher") {
    text("bonjour", 180, 200);
  }
}

  