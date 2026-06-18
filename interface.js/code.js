var x = 180

let etat = "masquer"

function setup() {
  createCanvas(400, 400);
  

  let button = createButton('hello');
  button.position(0, 80);
  button.mousePressed(affichage);
  
  let button2 = createButton('good bye');
  button2.position(180,150)
  button2.mousePressed(bye)
}

function bye(){
etat = "goodbye"
}

function affichage(){
  etat = "afficher"
}

function draw() {

        if(etat == "masquer"){
         clear();
          background(0,0,0);
      }
        if(etat == "afficher"){
         background(0,0,0);
         textSize(25);
         fill(100,100,100);
         text("bonjour", x, 200);
      }
       
       if(etat == "goodbye"){
         x = x + 1
         background(0,0,0);
         textSize(25);
         fill(100,100,100);
         text("bonjour", x, 200);
      }
}

  