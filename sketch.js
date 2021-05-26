

var bg;
var mouse,cat;
var mouseImg,catImg;
var mouseImg2,catImg2;

function preload() {

    //load the images here

    bg=loadImage("images/garden.png");
    mouseImg=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");

    catImg=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    tom=createSprite(700,700,20,20);
    tom.addAnimation("catSleep",catImg);
    tom.scale=0.1;
    
    

    jerry=createSprite(100,700,20,20);
    jerry.addAnimation("mouseHappy",mouseImg);
    jerry.scale=0.1

}

function draw() {

    background(bg);
   
   
    

    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<tom.width/2+jerry.width/2 && 
        jerry.x-tom.x<tom.width/2+jerry.width/2 && tom.y-jerry.y<tom.height/2+jerry.height/2 && 
        jerry.y-tom.y<tom.height/2+jerry.height/2){
          
          
          tom.addAnimation("catSleep",catImg3);
          tom.velocityX=0;
          jerry.addAnimation("mouseHappy",mouseImg3);
          
  
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
  if(keyCode === RIGHT_ARROW){
      tom.addAnimation("catSleep",catImg2);
      tom.changeAnimation('catSleep');
      tom.frameDelay = 25;
      tom.velocityX=-3;


      jerry.addAnimation("mouseHappy", mouseImg2);
      jerry.changeAnimation("mouseHappy")
      jerry.frameDelay = 25;
  }

}
