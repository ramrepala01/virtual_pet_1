//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var dogImg,dogImg_1;
function preload()
{
  dogImg=loadImage("images/dogImg.png");
dogImg_1=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
dog=createSprite(250,250,50,50);
dog.addImage(dogImg);
dog.scale=0.2;
database=firebase.database();
foodStock=database.ref("food");
foodStock.on("value",readStock);
  
}


function draw() {  
background("green");
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg_1);
  }
  textSize(20);
  fill("white");
  text("Please press the up arrow key to feed the dog",30,50);
  text("food remaining:"+foodS,160,150);

}
function readStock(data){
foodS=data.val();
console.log(foodS);
}
function writeStock(count){
  if(count<=0){
count=0;
 }else{
   count=count-1;
 }
 database.ref("/").update({
food:count
 })


}



