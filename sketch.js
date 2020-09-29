function setup() {
  createCanvas(800,400);
 fixed = createSprite(200, 200, 50, 80);
 moving = createSprite(400,200,80,30)
 fixed.shapeColor="green"
 moving.shapeColor="green"
 fixed.debug=true
 moving.debug=true
}

function draw() {
  background("orange");  

  moving.x=World.mouseX
  moving.y=World.mouseY

  if(moving.x-fixed.x<fixed.width/2+moving.width/2&&
    fixed.x-moving.x<fixed.width/2+moving.width/2&&
    fixed.y-moving.y<fixed.width/2+moving.width/2&&
    moving.y-fixed.y<fixed.width/2+moving.width/2){
    fixed.shapeColor="red"
    moving.shapeColor="red"
      }
    else {
      fixed.shapeColor="green"
      moving.shapeColor="green"
    }

  drawSprites();
}