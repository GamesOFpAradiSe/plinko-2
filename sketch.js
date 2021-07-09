const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var count = 0
var particles 
var plinkos = [];
var   divisions = []
var divisionHeight=300;
var score =0;

function preload(){

  bg = loadImage("bg.jpg")
 no5 = loadImage("500.png")
 no1 = loadImage("100.png")
 no2 = loadImage("200.png")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
	world = engine.world;
  //ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
   
   
    
}






  




function draw() {
  background(bg);
  Engine.update(engine);
  textSize(20)
//text(mouseX+","+mouseY,200,400);
  
 text("Score : "+score,20,30);
 for (var j = 40; j <300; j=j+80) 
    {
    
     var numer5 = createSprite(j,600);
      numer5.addImage(no5)
      numer5.scale = 0.05
    }
    for (var j = 360; j <550; j=j+80) 
    {
    
     var numer1 = createSprite(j,750);
      numer1.addImage(no1)
      numer1.scale = 0.05
    }
    for (var j = 600; j <width-30; j=j+80) 
    {
    
     var numer2 = createSprite(j,650);
      numer2.addImage(no2)
      numer2.scale = 0.05
    }
 
 
 
    drawSprites();
   if( particles!=null){
  particles.display()
  if (particles.body.position.y>760){
if (particles.body.position.x<300){
score = score+500
particles = null
}
else if(particles.body.position.x<600&&particles.body.position.x>301){
score = score+100
particles = null
}else if(particles.body.position.x<900 &&particles.body.position.x>601 ){
  score = score+200
  particles = null

}
  }
   }
    for (var k = 0; k < plinkos.length; k++) {
     
      plinkos[k].display();
    }
     
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  
    particles = new Particle(mouseX,0,10)
    

}
