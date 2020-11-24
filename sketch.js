
var theifrun,theifjump,theifcaught,policecaught,backgroundimg,jumpsound,policewalk,bgimage1,bgimage2;

var theif,police,bgsprite,firehydrantimg,postboximg,trashcanimg,firehydrant,trashcan,postbox;

var invisibleGround,coinimg,coin,coinsound;


var gamestate="Play";


var score=0;

var coingroup,obstaclegroup;



function preload(){
  theifrun=loadAnimation("images/run1.png","images/run2.png","images/run3.png","images/run4.png");
  theifjump=loadAnimation("images/jump1.1.png","images/jump2.1.png","images/jump3.1.png","images/jump4.1.png");
  theifcaught=loadAnimation("images/theifcaught1.png");
   policecaught=loadAnimation("images/caught1.png","images/caught2.png","images/caught3.png","images/caught4.png","images/caught5.png");
    policewalk=loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png","images/walk5.png");
    bgimage1=loadImage("images/bggame.png");
   bgimage2=loadImage("images/bggame2.png");
    jumpsound=loadSound("sounds/smb_jump-small.wav");
    firehydrantimg=loadImage("images/obstacle1.png");
    postboximg=loadImage("images/obstacle2.png");
    trashcanimg=loadImage("images/obstacle3.png");
    coinimg=loadImage("images/Coin.png");
    coinsound=loadSound("sounds/smb_coin.wav");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bgsprite=createSprite(width/2,height/2,1200,700);
bgsprite.addImage("backgrounds",bgimage2);
bgsprite.velocityX=-6;


bgsprite.scale=2.2;

theif=createSprite(200,200,20,20);
theif.addAnimation("run",theifrun);
theif.scale=2;
velocityY=velocityY=0.2

theif.setCollider("rectangle",0,0,30,theif.height);



police=createSprite(60,200,20,20);
  police.addAnimation("policecaught",policewalk);
  police.scale=0.7;


coingroup =new Group();
obstacleGroup =new Group();


invisibleGround=createSprite(width/2,680,1200,5);
invisibleGround.visible=false;

}


function draw(){
  theif.velocityY

  if (bgsprite.x<0){
    bgsprite.x=bgsprite.width/2;

  }

  drawSprites();
}


 function firehydrants(){
  //if(frameCount% 100 === 0){
    firehydrant=createSprite(1200,650,20,20);
    firehydrant.addImage("hydrant",firehydrantimg);
    firehydrant.scale=0.3;
    firehydrant.debug=true;
      firehydrant.velocityX=-6;
     
 // }
  obstacleGroup.add(firehydrant);
}
function postboxs(){
  //if(frameCount% 300 === 0){
    postbox=createSprite(1200,650,20,20);
    postbox.addImage("postbox",postboximg);
      postbox.scale=1.1;
      postbox.velocityX=-6;
 // }
 obstacleGroup.add(postbox);
}
function trashcans(){
  trashcan=createSprite(1200,650,20,20);
trashcan.addImage("trashcan",trashcanimg);
trashcan.scale=0.3;
trashcan.velocityX=-6;
obstacleGroup.add(trashcan);
}

function coins(){
  if(frameCount% 50 === 0){
    coin=createSprite(1200,550,20,20);
    coin.addImage("coin",coinimg);
    coin.velocityX=-6;
    coin.debug=true;
    coin.setCollider("rectangle",0,0,10,coin.height);
    coingroup.add(coin);
  }
}