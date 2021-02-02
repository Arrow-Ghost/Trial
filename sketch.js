var object2, object1;
var car,wall;

function setup() {
  createCanvas(1200,800);
  object2 = createSprite(600, 400, 50, 80);
  object2.shapeColor = "green";
  object2.debug = true;
  object1 = createSprite(400,200,80,30);
  object1.shapeColor = "green";
  object1.debug = true;
  car = createSprite(200,200,40,40);
  car.shapeColor = "green";
  car.velocityX = 4;
  wall = createSprite(1000,200,20,100);
  wall.shapeColor = "blue";

   
}

function draw() {
  background(0,0,0);  
  object1.x = World.mouseX;
  object1.y = World.mouseY;
  if (isTouching(car,wall)) {
    car.shapeColor = "blue";

  } 
  drawSprites();
}
