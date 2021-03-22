var dog, happyDog, dogImg2;
var foodS;
var database;

function preload()
{
  happyDog = loadImage('images/dogImg1.png');
  dogImg2 = loadImage('images/dogImg.png');
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg2)
  dog.scale = 0.3
  
  database = firebase.database();

  var foodStock = database.ref('Food'); 
  foodStock.on('value', readStock);

}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here

}

function readOp(data) {
  foodS = data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}

function showerr() {
  console.log('error');
}




