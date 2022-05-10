const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//  DECLARAR VARIABLES




function setup() {
  createCanvas(500, 700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  //  CREAR NUEVO SUELO
  
  
  //  CREAR NUEVA CUERDA Y NUEVA FRUTA
  
  

  //Matter.Composite.add( CUERPO OBJETO 1, OBJETO 2 );
  

  //  NUEVA RESTRICCIÓN ENTRE LA CUERDA Y LA FRUTA
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);

  //  MOSTRAR CUERDA
  
  
  //  DIBUJAR FRUTA
  

  //  MOSTRAR FRUTA
  

  Engine.update(engine);
}
