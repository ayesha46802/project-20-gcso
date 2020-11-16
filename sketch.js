var car,wall;
var speed, weight

function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90)
  weight=random(40,1500)
 
  car=createSprite(50,200,50,50)
  car. velocityx=speed;
 wall=createSprite(1500,200,60,200)


}

function draw() {
  background(0,0,0); 

  car.x=World.mouseX;
  car.y=World.mouseY

  if(car.x-wall.x < car.width/2+ wall.width/2
    && wall.x-car.x < car.width/2+ wall.width/2
    && car.y-wall.y < car.height/2+ wall.height/2
    && wall.y-car.y< car.height/2+ wall.height/2 ){
      wall.shapeColor="yellow"
      car.shapeColor="yellow"  
    }
    else{
      car.shapeColor="green"
      wall.shapeColor="green" 
    }

  
  {
    car.velocityx=0
    var deformation=0.5*weight*speed*weight/22509;
    if (deformation>180)
    {
      car.shapecolor=color(255,0,0)
  
    }
    if (deformation<80 && deformation>100);
    {
      car.shapecolor=color(230,230,0)
    }
    if(deformation<100) 
    {
      car.shapecolor=color(0,255,0)
    }
  
  }
  drawSprites();
}