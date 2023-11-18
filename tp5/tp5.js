//felipe roldan 
//95549/4
// https://www.youtube.com/watch?v=dv3ywwmOUY8


let objuego

  function setup() {
  createCanvas(800, 400)
    objuego= new juego()
}


function draw() {
background(5, 150, 255)
    fill(3, 140, 0)
    rect(0,350,800,50)
    
    objuego.dibujar()
}



function keyPressed() {
  objuego.teclapres(keyCode)
}
