
var bgImg;
var snow , snowImg;

function preload(){
  bgImg  =  loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp");

}
function setup() {
  createCanvas(800,400);

  
 
    

  

  

  
}

function draw() {
  background(bgImg); 

  spawnSnow();
  
  drawSprites();
}
function spawnSnow(){
  if(frameCount % 80 === 0){
    snow = createSprite(300,300,10,10);
    snow.addImage("abc",snowImg);
    snow.scale = 0.3
    snow.velocityY = 5;
  snow.x=Math.round(random(130,460)); 
  }
}