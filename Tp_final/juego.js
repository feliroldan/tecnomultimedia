class juego1 {
  constructor() {
    this.cantidadenemigos = 3;
    this.crearpersonaje();
    this.crearenemigos();
    this.tiempo = 20;
    this.ganar = false;
    this.perder = false;
    this.juego = true;
  }

  dibujar() {
    if (this.tiempo > 15) {
      fill(0);
      textSize(15);
      text("REGLAS: escapar de los guardias por 20 segundos, no dejes que te agarren!!  ", 500, 100);
    }
    if (this.personaje.vida == false) {
      this.perder = true;
      this.juego = false;
    }
    if (this.tiempo == 0 && this.personaje.vida == true) {
      this.ganar = true;
      this.juego = false;
    }

    if (this.ganar == true) {
      fill(0, 255, 0);
      textSize(30);
      text("GANASTE, pudiste volver con tu dueño!", 400, 200);
    } else if (this.perder == true) {
      fill(255, 0, 0);
      textSize(30);
      text("PERDISTE, atraparon al gato con botas :(", 400, 200);
    }

    if (frameCount % 60 == 0 && this.personaje.vida == true && this.tiempo >= 0) {
      this.tiempo -= 1;
    }

    if (this.tiempo >= 0) {
      fill(0);
      textSize(15);
      text(this.tiempo, 200, 100);
    }

    this.personaje.dibujar();

    if (this.ganar == false) {
      for (let i = 0; i < this.cantidadenemigos; i++) {
        this.enemigos[i].dibujar();
        this.enemigos[i].movizq();
        if (this.colision(this.personaje, this.enemigos[i])) {
          this.personaje.vida = false;
        }
      }
    }
  }

  crearenemigos() {
    this.enemigos = [];

    for (let i = 0; i < this.cantidadenemigos; i++) {
      this.enemigos[i] = new enemigo(800, 300, 80, 80);
    }
  }

  crearpersonaje() {
    this.personaje = new personaje(10, 300, 70, 70);
  }

  colision(personaje, enemigo) {
    return (
      personaje.posx < enemigo.posx + enemigo.ancho &&
      personaje.posx + personaje.ancho > enemigo.posx &&
      personaje.posy < enemigo.posy + enemigo.alto &&
      personaje.posy + personaje.alto > enemigo.posy
    );
  }

  teclapres(keyCode) {
    this.personaje.teclapres(keyCode);
  }
}

class personaje {
  constructor(posx, posy, ancho, alto) {
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;
    this.vel = 1;
    this.grav = 0.3;
    this.alt = -10;
    this.vida = true;

    this.micolor = color(240, 120, 0);

    this.imagen = loadImage("data/gato.png");
  }

  dibujar() {
    if (this.vida == true) {
      image(this.imagen, this.posx, this.posy, this.ancho, this.alto);
      this.vel += this.grav;
      this.posy += this.vel;
      if (this.posy > 300) {
        this.vel = 0;
        this.posy = 300;
      }
    }
  }

  saltar() {
    if (this.posy == 300) {
      this.vel += this.alt;
    }
  }

  moverder() {
    if (this.posx + this.ancho < width) {
      this.posx += 50;
    }
  }

  moverizq() {
    if (this.posx - this.ancho > 0) {
      this.posx -= 50;
    }
  }

  teclapres(keyCode) {
    if (keyCode == UP_ARROW) {
      this.saltar();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverder();
    } else if (keyCode == LEFT_ARROW) {
      this.moverizq();
    }
  }
}

class enemigo {
  constructor(posx, posy, ancho, alto) {
    this.vel = random(1.5, 5);
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;
    this.vida = 1;
    this.micolor = color(100, 100, 100);

    this.imagen = loadImage("data/guardia.png");
  }

  dibujar() {
    image(this.imagen, this.posx, this.posy, this.ancho, this.alto);
  }

  movizq() {
    this.posx -= this.vel;
    if (this.posx < -50) {
      this.posx = 800;
    }
  }
}
