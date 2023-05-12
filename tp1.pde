
int segundos;

int posY0;
int posY1;
int posY2;
int posX3;


PImage imagen;
PImage imagen1;
PImage imagen2;


int tamtexto;//=?

PFont  fuente;

boolean pant0comp;
boolean pant1comp;
boolean pant2comp;
boolean pant3comp;

void setup() {
  size(640, 480);


  posY0=280 ;
  posY1=640;
  posY2=-100;
  posX3 = width/8;


  imagen= loadImage("imagen.jpg");
  imagen1= loadImage("imagen1.png");
  imagen2= loadImage("imagen2.jpg");



  tamtexto= 0;

  fuente= loadFont("CenturyGothic-48.vlw");
  textFont(fuente, 30);

  pant0comp =false;
  pant1comp= false;
  pant2comp =false;
}


void draw() {
  background(255);




  if (segundos>=12) {
    pant0comp= true;
  }
  if (segundos>=23) {
    pant1comp= true;
  }
  if (segundos>=33) {
    pant2comp= true;
  }
  if (segundos==0) {
    pant0comp= false;
    pant1comp= false;
    pant2comp= false;
  }



  //primer pantalla
  if (segundos<12) {
    image(imagen, 0, 0, width, height);
  }

  //segunda pantalla
  if (segundos>=12 && segundos<23) {
    image(imagen1, 0, 0, width, height);
  }
  //tercer pantalla
  if (segundos>=23 && segundos<33) {
    image(imagen2, 0, 0, width, height);
  }




  //  \n para pasar un texto abajo

  fill(255);

  //texto pantalla 0
  fill(255,0,0);
  textSize(20);
  text("obra instalación del artista Joaquín Fargas \n y el biólogo Diego Golombek 2011.  \n \n El arte electrónico utiliza \n tecnología  \n y medios digitales para crear obras innovadoras.  ", width/18, posY0);
  if (segundos == 0) {
    posY0= 520;
  }
  if (posY0>-height && pant0comp== false) {
    posY0 --;
    
  }
  
  
  //texto pantalla 1
fill(255);
  text(" . El  “arte electrónico”  hace una mirada crítica al uso \n y producción de tecnología dentro \n del mercado capitalista. \n fusiona la tecnología y el arte\n para crear \n nuevas formas de expresión visual y sonora.", width/8, posY1);
  if (pant0comp== false) {
    posY1=510;
  }
  if (posY1>-height && pant0comp== true) {
    posY1  --;
    
  }
  
  
  //texto pantalla 2
  loadFont("BerlinSansFB-Bold-48.vlw");
 fill(255,0,0);
  text(" El arte digital, más allá de una técnica\n, se vuelve un manifiesto y una \n resistencia que habla de cómo percibimos \n e interactuamos en el mundo. ", width/18, posY2);
  if (pant1comp== false) {
    posY2= -90;
  }
  if (posY2>-height/2 && pant1comp== true) { 
    posY2 ++;
  }




  //pantalla final
  if (pant2comp== true) {
    background(0);
    fill(255);
    textSize(32);
    text("tocà para reiniciar", 300, height/2);



    //boton

  if(mouseX>450 && mouseX<550 && mouseY>380 && mouseY<420) {
  fill ( 300,0,0);
  } else { 
   fill(0,0,253);
  }
  

    rect(450, 380, 100, 40);
  



  // segundos
  }
  if ( frameCount %60==0) {
    segundos++;
    println(segundos);
  }
}

void mousePressed() {

  if (pant2comp== true) {
    if (mouseX>450 && mouseX<550 && mouseY>380 && mouseY<420) {
      segundos=0;
    }
  }
}
