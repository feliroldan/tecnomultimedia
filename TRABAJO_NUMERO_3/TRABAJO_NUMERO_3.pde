// legajo 95549/4
//felipe roldan 
// video explicativo: https://youtu.be/exdshuUTNB8


int[] pantallas = new int[17];
PImage[] fotos = new PImage[17];
int numerocero = 0;
String[] textoPantallas = new String[17];
int x1;
int x2;
int y1;
int y2;
int boton;
int botonalto = 100;
int botonancho = 40;
boolean primerfinal = false; 
boolean segundofinal = false; 
boolean tercerfinal = false; 
boolean nuevaSecuencia = false;

void setup() {
  size(600, 600);

  

  for (int i = 0; i < fotos.length; i++) {
    fotos[i] = loadImage("image" + (i + 1) + ".png");   //USA ARREGLOS PARA CARGAR IMAGENES
  }

  textoPantallas[0] = "un joven hereda un molino \n y un gato de su pobre padre, el joven \n se depirme al ver que se va \n a morir de hambre ";
  textoPantallas[1] = "el gato se siente mal por su dueño \n y le procede a comentar que el \n lo puede ayudar";
  textoPantallas[2] = "el gato le pide a \n su dueño que le consiga\n un par de botas, un sombrero y \n una bolsa para que lo \n pueda ayudar";
  textoPantallas[3] = "el dueño sin tener otra \n opcion, le consigue lo que el \n gato le pide";
  textoPantallas[4] = "sin tardar tanto, el gato \n se dirije al bosque con \n muchas verduras para cazar animales ";
  textoPantallas[5] = "el gato obtiene muchas presas y decide ir \n al reinado  para ofrecerles las presas a\n nombre de joven. el rey quedo muy \n agredicido y le ofrece que se case con su \n hija.  ";
  textoPantallas[6] = "en busca de un castillo para impresionar \n al reinado, el gato con botas se dirije \nal castillo del ogro magico para robarle \n su imperio";
  textoPantallas[7] = "cuando llega al castillo le dice al ogro\n que se convierta en un raton para que \nle crea que es magico, \ncuando se convierte \nen raton el gato se lo come";
  textoPantallas[8] = "ya con un castillo, la novia del rey \n y un gato que fue y sera su mejor amigo,\n decide casarse y hacer una familia ";
  textoPantallas[9] = " el gato se decepciona por no \n tener una recompensa \n despues de todo. \n  PRIMER FINAL ";
  textoPantallas[10] = "el gato se va rapido a comentarle \n lo sucedido al molinero \npara organizar un plan para sorprender\n a la realeza";
  textoPantallas[11] = "el dueño no lo puede creer,\n el unico peso que tenia lo\n habia gastado para las botas del gato";
  textoPantallas[12] = "la deseperacion por no conseguir\n nada hace que se rindan y sigan\n su vida como si nada. \n SEGUNDO FINAL";
  textoPantallas[13] = "el gato se siente mal por\n la reaccion de su nuevo dueño al \nver lo poco que heredo ";
  textoPantallas[14] = "el gato se le ocurre una \n idea para levantar la economia\n del molinero. le comenta que el,\n es mu bueno apostando.";
  textoPantallas[15] = "entonces el joven vende su molino \nle da todo al gato para \nque apueste en un bar. esto funciona \ny obtiene mucho dinero";
  textoPantallas[16] = "con el dinero recaudado,\n el joven y el gato compran \nun campo hermoso para vivir juntos\n TERCER FINAL";

   x1 = 480;
  x2 = 480;
  
  y1 = 550;
  y2 = 20;
}

void draw() {
  background(0);
  imagenesytexto();
}

void mousePressed() {
  if (numerocero == 9) {
   if ((!primerfinal && !segundofinal) || nuevaSecuencia) {
    if (mouseX >= x1 && mouseX <= x1 + botonalto && mouseY >= y1 && mouseY <= y1 + botonancho) {
        reiniciar();
      }
    }
  } else if ((numerocero == 12 || numerocero == 16) && nuevaSecuencia) {
   if (mouseX >= x2 && mouseX <= x2 + botonalto && mouseY >= y2 && mouseY <= y2 + botonancho) {
      reiniciar();
    }
  } else {
   if (mouseX >= x1 && mouseX <= x1 + botonalto && mouseY >= y1 && mouseY <= y1 + botonancho) {
      avanzar();
    } else if (numerocero == 6 && !tercerfinal) {
      if (mouseX >= x2 && mouseX <= x2 + botonalto && mouseY >= y2 && mouseY <= y2 + botonancho) {
        tercerfinal = true;
        nuevaSecuencia = true;
        numerocero = 10; // Cambiar a la pantalla 10
      }
    } else if (numerocero == 0 && !primerfinal) {
     if (mouseX >= x2 && mouseX <= x2 + botonalto && mouseY >= y2 && mouseY <= y2 + botonancho) {
        primerfinal = true;
        nuevaSecuencia = true;
        numerocero = 13; // Cambiar a la pantalla 13
      }
    }
  }
}

void boton(String pepe, int x, int y, int width, int height) {  // boton("Avanzar", x1, y1, botonalto, botonancho);
   fill(50,134,34);
  rect(x, y, width, height);
  fill(0);
  textAlign(CENTER, CENTER);
  text(pepe, x + width / 2, y + height / 2);
}

void imagenesytexto() {
  if (numerocero >= 0 && numerocero <= 16) {
    image(fotos[numerocero], 0, 0, 600, 600);
    fill(137, 242, 255, 100);
    noStroke();
    rect(150, 200, 300, 200);
    fill(0);
    textSize(18);
    text(textoPantallas[numerocero], 300, 300);

    if ((numerocero == 6 || numerocero == 0) && !primerfinal) {
      boton("camino a", x1, y1, botonalto, botonancho);
      boton("camino b", x2, y2, botonalto, botonancho);
    } else if (numerocero == 9 && (!primerfinal || !segundofinal) && !nuevaSecuencia) {
      boton("Reiniciar", x1, y1, botonalto, botonancho);
    } else if ((numerocero == 12 || numerocero == 16) && nuevaSecuencia) {
      boton("Reiniciar", x2, y2, botonalto, botonancho);
    } else {
      boton("Avanzar", x1, y1, botonalto, botonancho);
    }
  }
}

void reiniciar() {
  numerocero = 0;
  primerfinal = false;
  segundofinal = false;
  tercerfinal = false;
  nuevaSecuencia = false;
}

void avanzar() {
  numerocero++;
}
