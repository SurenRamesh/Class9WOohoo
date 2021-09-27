var bigball
function setup() {
  createCanvas(400,400);
  bigball = createSprite(200,100,92,28)
  bigball.shapeColor = "green"
}

function draw() 
{
  background(30);
  drawSprites()

  if(keyDown("right")){
    bigball.x+=6
  }
  if(keyDown("left")){
    bigball.x-=6
  }
  if(keyDown("up")){
    bigball.y-=6
  }
  if(keyDown("down")){
    bigball.y+=6
  }
}




