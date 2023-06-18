//felipe roldan 
//legajo: 95549/4
// trabajo 2 ilusion optica 
//https://youtu.be/6IUxTeleNWY


float segundos ;
PImage imagen;
float circY;
float circX;

void setup(){
 size(800,400); 
  imagen= loadImage("imagen.jpeg");
  circX=0;
  circY=0;

}
void draw(){
if ( frameCount %60==0) {
    segundos++;
    println(segundos);
  }
  background(255);
  dibujaGrilla(800,0,800,400,30,60);// invoco el fondo 
    image(imagen,0,0,400,400);
      fill ( #A0A0A0);
    ellipse(600,200,circX,circY);// circulo del medio
     if(circX<=400 && circY<=400){
        circY+=.8;// velocidad del circulo
        circX+=.8;
     }

     if(dist(circX,circY,400,400)<150){ 

   }
   
   
   // boton de reinicio 
 if(tamanoCirculo()==true   ){
   
 
   if(mouseX>410 && mouseX<490 && mouseY>320 && mouseY<400) {
  fill ( #A0A0A0);
  } else { 
   fill(0);
  }
rect(410,320,80,80);

 textSize(20);
 fill(255);
   text("reiniciar:", 415,360);
   
}

}
void mousePressed(){
      if(tamanoCirculo()==true){

if(mouseX>410 && mouseX<490 && mouseY>320 && mouseY<400){

   segundos=0;
    circX=0;
  circY=0;
   
  }
      }
}
