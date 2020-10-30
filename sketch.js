var wall, car;
var speed, weight;

function setup() {
  createCanvas(1400,400);
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1300, 200, 50, 300);
  car=createSprite(50, 200, 50, 50);
  wall.shapeColor="grey";
  car.shapeColor="purple";
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
 if(wall.x-car.x<wall.width/2+car.width/2){
   car.velocityX=0;
   var deform=0.5*weight*speed*speed/22500;
   if(deform>180){
     car.shapeColor="red";
   }
   if(deform<=180&&deform>=100){
    car.shapeColor="yellow";
  }
  if(deform<100){
    car.shapeColor="red";
  }
 }

 
  drawSprites();
}