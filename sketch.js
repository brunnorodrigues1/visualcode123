var caixa 
function setup() {
  caixa = createSprite(200,200,50,50) 
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown(RIGHT_ARROW)) {
    caixa.x = caixa.x+4
  }
  if (keyDown(LEFT_ARROW)) {
    caixa.x = caixa.x-4
  }
  if (keyDown(UP_ARROW)) {
    caixa.y = caixa.y-4
  }
  if (keyDown(DOWN_ARROW)) {
    caixa.y = caixa.y+4
  }

}




