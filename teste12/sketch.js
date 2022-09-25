
var pathImage,path

var jake_running,jake

var leftBoundary,rightBoundary

var invisibleGround


function preload(){
  //loadImage (carregarImagem) da pista)
 pathImage = loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
jake_running = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.PNG", "jake5.png") 

}

function setup(){
  
  createCanvas(400,500);
 //crie um sprite para a pista 
 path = createSprite(200,180,400,20);



  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

 jake = createSprite(100,200,80,30);
 jake.addAnimation("running", jake_running)
 jake.scale=0.6
 jake.y=350


//limite esquerda
leftBoundary=createSprite(0,0,100,800)
leftBoundary.visible = false

//defina visibilidade falsa para o limite esquerdo

//limite dieito
rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible = false

}

function draw() {
  background(0)


path.addImage("path", pathImage)
path.velocityY = -30;
console.log(path.y)

if(path.y<0){
  path.y=path.width/1
}

  jake.x=World.mouseX;


  edges = createEdgeSprites();
  jake.collide(edges)


  jake.collide(invisibleGround)
  jake.collide(rightBoundary)
  jake.collide(leftBoundary)




drawSprites() 
}