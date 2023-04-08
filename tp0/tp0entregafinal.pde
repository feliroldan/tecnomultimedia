//TP0 felipe roldan
// legao 95549/4


PImage img; 

void setup(){
strokeWeight(1);
size(800,400);
background(#3d5d99);
img =loadImage("mclovin.jpg");



}


void draw(){
image(img,400,0,400,400);


println("X:");
println(mouseX);
println("Y:");
println(mouseY);
strokeWeight(1);
fill(#F7A425);// remera
stroke(0,0,0);
line(400,0,400,400);//linea del medio
strokeWeight(1);
rect(100,260,200,500);//cuerpo

//cuello remera
fill(#D80404);
ellipse(200,254,100,110);
//cuello
fill(#FACB8D);
ellipse(200,254,80,90);

//orejas
ellipse(270,140,30,40);
ellipse(130,140,30,40);

ellipse(200,150,150,200);// cara
fill(255,255,255);


// anteojos 
ellipse(162,120,45,20);
ellipse(238,120,45,20);
strokeWeight(1);
stroke(0,0,0);
line(184,119,215,119);
line(139,119,128,120);
line(260,119,271,120);

ellipse(162,120,35,15);// ojo izq
ellipse(238,120,35,15);//ojo der

fill(#7C6E41);
circle(162,120,10);//pupilas
circle(238,120,10);

fill(#FCE8FA);
// nariz)
fill(#FACB8D);
triangle(200,115,210,145,190,145);

//cejas
strokeWeight(2.5);
stroke(0,0,0);
line(150,102,175,102);
line(222,102,250,102);
line(137,110,150,102);
line(250,102,266,110);

strokeWeight(1);
stroke(0,0,0);
//boca
fill(#FA9FAB);
ellipse(200,200,58,13);
line(170,200,228,200);
fill(255,255,255);strokeWeight(1);

//pelo
strokeWeight(4.5);
stroke(0,0,0); //color de pelo
line(175,56,241,58);
line(175,46,153,75);
line(153,75,251,75);
line(176,44,242,78);
line(173,48,217,79);
line(173,48,180,80);
line(178,47,225,74);
fill(0,0,0);
rect(179,62,20,10);
rect(162,55,78,18);
line(155,71,244,69);
line(210,47,246,73);
rect(181,43,52,9);
line(137,90,153,68);
line(263,90,250,71);
line(242,61,250,71);









}
