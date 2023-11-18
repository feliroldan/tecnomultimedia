class juego {
  constructor() {
    this.cantidadenemigos=3
      this.crearpersonaje()
      this.crearenemigos()
      this.tiempo=20
      this.ganar=false
      this.perder=false
      this.juego=true
  }


  dibujar() {

    if (this.tiempo>15) {
      fill(0)
        textSize(15)
        text("Reglas:Tienes 20 segundos para que el gato\n con botas salte a los enemigos", 500, 100)
    }
    if (this.personaje.vida==false) {
      this.perder=true
        this.juego=false       // perder 
    }
    if (this.tiempo==0 && this.personaje.vida==true) {
      this.ganar=true
        this.juego=false        //ganar
    }


    if (this.ganar== true) {
      fill(0, 255, 0)
        textSize(30)
        text("Ganaste", 400, 200)
    } else if (this.perder==true) {
      fill(255, 0, 0)
        textSize(30)
        text("PERDISTE", 400, 200)
    }



    if ( frameCount %60==0&& this.personaje.vida==true && this.tiempo>=0) {
      this.tiempo-=1
    }
    fill(0)
      textSize(15)
      text(this.tiempo, 200, 100)

      this.personaje.dibujar()

      if (this.ganar==false) {
      for (let i=0; i< this.cantidadenemigos; i++) {     //dibuja  hasta ganar 
        this.enemigos[i].dibujar()
          this.enemigos[i].movizq()
      }
    }
    for (let i = 0; i < this.cantidadenemigos; i++) {
      if (colision(objuego.personaje, objuego.enemigos[i])) {
        objuego.personaje.vida = false
      }
    }
  }
  crearenemigos() {
    this.enemigos=[]

      for (let i=0; i< this.cantidadenemigos; i++) {
      this.enemigos[i]= new enemigo(800, 300)
    }
  }


  crearpersonaje() {
    this.personaje =new personaje(10, 300, 50, 50)
  }





  teclapres(keyCode) {
    this.personaje.teclapres(keyCode)
  }
}
function colision(personaje, enemigo) {
  if (personaje.posx < enemigo.posx + 50 && personaje.posx + personaje.ancho > enemigo.posx && personaje.posy < enemigo.posy + 50 && personaje.posy + personaje.alto > enemigo.posy) {
    return true
  }
  return false
}
