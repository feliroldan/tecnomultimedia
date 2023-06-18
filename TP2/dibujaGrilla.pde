void dibujaGrilla(float x_ , float y_, float ancho_, float alto_, int cantX_, int cantY_){
 push();
  float modX = ancho_/cantX_;
  float modY = alto_/ cantY_;

  for ( int i=0; i<cantX_ ; i++){
 for ( int j=0; j<cantY_ ; j++){
   if ( (i+j)%2 == 0 ) 
        { 
        fill(0); 
      } else {
        fill (random(255)); 
      }
   rect( i*modX, j*modY, modX, modY);
}
}
  
pop();

}

// declaracion de la grilla
