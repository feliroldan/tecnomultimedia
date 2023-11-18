class enemigo {
  constructor(posx, posy) {
    this.vel = random(1.5, 5)
      this.posx=posx;
    this.posy=posy ;
    this.vida=1
      this.micolor=color(0, 0, 0)
  }

  dibujar() {
    fill(this.micolor)
      rect(this.posx, this.posy, 50, 50)
  }


  movizq() {
    this.posx-=this.vel
      if (this.posx<-50) {
      this.posx=800
    }
  }
}
