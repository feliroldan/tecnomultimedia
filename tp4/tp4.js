// Felipe Roldan 
// Legajo: 95549/4
// Tp4 p5js
// https://www.youtube.com/watch?v=aEX00WXIdCA

let x, y, bx, by;
let ang, dire; // angulo de giro y dirección del disparo
let vel;
let disparo=false ;
let cant=15;
let tam=50;
let derribos; 
let derribado=[];
let pos=[];
let pantallas=[];

function setup() {
  createCanvas(800,600);
  x = width/2;
  y = height;
  vel = 15;
  bx = x;
  by = y;
  derribos=0
  pantallas[0]= true ;
    pantallas[1]= false;
    pantallas[2]= false;
    pantallas[3]= false;
    
    
  for (let i= 0; i<cant; i++) {// ubica asteroides
    pos[i]=[];
      pos[i][0] = random(width); // eje x asteroides
      pos[i][1]= random(height);// eje y asteroides
      derribado[i] = false;
  }
  
  
  }

function draw() {
  background(203,203,203);
  
  push();
  translate(x, y);
  ang = atan2(mouseY-y, mouseX-x); // captura el angulo de giro del cañón
  rotate(ang);
  fill(200, 200, 0);
  rectMode(CENTER);
  rect(0, 0, 100, 30);
  pop();
  
if (disparo) {
    bx = bx+cos(dire)* vel; // valor dela bala para que funcione
    by = by+ sin(dire)*vel;
  }
  fill(200, 0, 0);
  circle(bx, by, 20);



if (bx>width || bx<0 || by>height || by<0) { 
    bx = x;
    by = y;
    disparo = false; // reinicia la bala 
  }


for ( let i =0; i<cant; i++) { //dibuja ellipses
    fill(255)
      ellipse(pos[i][0], pos[i][1], tam)



      if (derribo(bx, by, 20, pos[i][0], pos[i][1], tam)&& !derribado[i]) { 

        bx=x;
        by=y;
        disparo=false;
        pos[i][1] = width+tam;
      derribado[i] = true;
      derribos++ ;
       
    }
  }

if (pantallas[0]==true) {


    pantallas[1]= false;
      pantallas[2]= false;
      pantallas[3]= false;
      pantallas[4]= false;

      segundos=0;
      derribos=0;

      for (let i= 0; i<cant; i++) {// ubica asteroides
      pos[i]=[]
        pos[i][0] = random(width) // eje x asteroides
        pos[i][1]= random(height)// eje y asteroides
        derribado[i] = false;
    }



      card("Iniciar parida", 300, 260, 200, 80)
      card("Créditos", 300, 460, 200, 80)
      card("Reglas: \n destruye los asteroides \n antes  de que \n se acaba el tiempo", 20, 100, 255, 150)
  }


  if (pantallas[1]==true) {


    card("autor:\nFelipe Roldan", 80, 120, 200, 80);
      card("diseñador: \nFelipe Roldan", 80, 290, 200, 80);
      card("historia: \nFelipe Roldan", 80, 440, 200, 80);
      card("Volver a inicio", 550, 440, 200, 80);
  }

  if ( pantallas[2]==true) {
    if ( frameCount % 60==0) {    // tiempo para ganar
      segundos++;
    }
    text("Derribos:", 50, 500)
      text(derribos, 140, 500)
      
      text("Tiempo transcurrido:", 50, 550)
      text(segundos, 240, 550)
  }

  if (pantallas[3]==true) {
    fill(69, 255, 69)
      text("GANASTE", width/2, height/4)
      card("Volver a inicio", 550, 440, 200, 80)  //variablee propia 
     
  }

  if (segundos<15 && derribos==cant) {   // los 15 segundos. GANASTE
    pantallas[3]= true
      pantallas[2]=false
  }
  
  

  if (pantallas[4]==true) {         // PERDISTE
    fill(255, 0, 0);
      text("GAME OVER", width/2, height/4);
      card("Volver a inicio", 550, 440, 200, 80);
  
  }
  if (segundos>=15 && derribos<cant && pantallas[2]==true) {
    pantallas[4]=true;
      pantallas[2]=false;
  }




}





function mousePressed() {
 
 if (pantallas[0]==true && boton(300, 500, 260, 340)) {
    pantallas[2]=true;
      pantallas[0]=false;
  } else if (pantallas[0]==true && boton(300, 500, 460, 540)) {
    pantallas[1]=true;
      pantallas[0]=false;
  } else if (pantallas[1]==true && boton(550, 750, 440, 520)) {
    pantallas[0]=true;
  } else if (pantallas[2]==true) {
    if (disparo==false) {
      disparo= true;
        dire=ang; // cambia valor direccion bala embace al angulo
    }
  } else if (pantallas[3]==true && boton(550, 750, 440, 520)) {
    pantallas[0]=true;
  } else if (pantallas[4]==true && boton(550, 750, 440, 520)) {
    pantallas[0]=true;
  }

  
}

function boton(x1, x2, y1, y2) {
  if (mouseX>x1 && mouseX<x2 && mouseY >y1 && mouseY<y2) {
    return true;
  }
}


function derribo(x, y, d, px, py, ptam) {//revisa que la bala golpee asteroide

  let distan = dist(x, y, px, py);

    if ( distan<d/2+ptam/2) {
    return true;
  } else {
    return false;
  }
}

function card(texto,x, y, anc, alt) {
  fill(255);
  rect(x, y, anc, alt);
    
    fill(0);
    text(texto, x+40, y+45);
    textSize(20);
}
