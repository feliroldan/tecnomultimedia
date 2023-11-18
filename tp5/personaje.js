class personaje {
  constructor(posx, posy, ancho, alto) {
    this.posx=posx
      this.posy=posy
      this.ancho=ancho
      this.alto=alto
      this.vel=1
      this.grav=0.3
      this.alt=-10
      this.vida=true

      this.micolor=color(255,160,36)
  }

  dibujar() {
    if (this.vida==true) {
      fill(this.micolor)
        rect(this.posx, this.posy, this.ancho, this.alto)
        this.vel+= this.grav
        this.posy+=this.vel
        if (this.posy>300) {
        this.vel =0
          this.posy=300
      }
    }
  }

  saltar() {
    if (this.posy==300) {
      this.vel +=this.alt
    }
  }


  moverder() {
    if (this.posx+this.ancho<width) {
      this.posx+= 50
    }
  }
  moverizq() {
    if (this.posx-this.ancho>0) {
      this.posx-= 50
    }
  }




  teclapres(keyCode) {
    if (keyCode==UP_ARROW) {
      this.saltar()
    } else if (keyCode==RIGHT_ARROW) {
      this.moverder()
    } else if ( keyCode==LEFT_ARROW) {
      this.moverizq()
    }
  }
}
