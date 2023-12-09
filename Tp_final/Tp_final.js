//Felipe joaquin roldan      legajo: 95549/4
// Napolitan Revay Valentin  Legajo: 89751/6


let juego;

  function setup() {
  juego = new JuegoC();
 
}

function draw() {
  juego.dibujar();
}

function mouseMoved() {
  juego.manejarMouseMovido();
}

function mousePressed() {
  juego.manejarMousePresionado();
}

function keyPressed() {
  juego.objuego.teclapres(keyCode)
  juego.objuego2.tepres(keyCode)
}
