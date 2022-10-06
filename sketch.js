var player 
var chao
var a
var imagem
var zero,primeiro,segundo,terceiro,quarto, quintoA, quintoB, sexto, setimo, oitavo, nono
var plataformas
var puzzle
var chave 
var mapa,map
var porta,portaImg
function preload(){
  
  imagem = loadImage("sample.png")
  map = loadImage("Mapa.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  plataformas = new Group() 

  player = createSprite(200,500,70,50);
  player.shapeColor = "blue";

  a = createSprite(200,300,50,50);
  a.shapeColor = "yellow"

  chao = createSprite(windowWidth/2,windowHeight,windowWidth*5,50);
  zero = createSprite(595,833,745,10)
  primeiro = createSprite(1100,797,190,10);
  segundo = createSprite(1500,740,420,10);
  terceiro = createSprite(1800,663,57,10);
  quarto =createSprite(1740,600,210,10);
  quintoA =createSprite(270,565,409,10);
  quintoB =createSprite(1100,565,445,10);
  sexto =createSprite(650,475,390,10);
  setimo =createSprite(1550,507,164,10);
  oitavo =createSprite(1385,445,162,10);
  nono = createSprite(1010,354,333,10);

  puzzle = createSprite(1353,521,20,20);
  puzzle.shapeColor = "yellow"
  chave = createSprite(player.x,player.y,10,5);
  mapa = createSprite(329,486,30,30);
  mapa.addImage(map)
  mapa.scale = 0.04
  porta = createSprite(995,282,101,140);


plataformas.add(chao)
plataformas.add(zero)
plataformas.add(primeiro)
plataformas.add(segundo)
plataformas.add(terceiro)
plataformas.add(quarto)
plataformas.add(quintoA)
plataformas.add(quintoB)
plataformas.add(sexto)
plataformas.add(setimo)
plataformas.add(oitavo)
plataformas.add(nono)

plataformas.setVisibleEach(false)
porta.visible=false
}

function draw() {
  background(imagem); 

console.log(mouseX,mouseY);

if(keyDown("D")){
  player.x += 7 
}
if(keyDown("A")){
  player.x -=7
}

if(keyDown("w")&& player.collide(plataformas)){
  player.velocityY=-13
  
}
player.velocityY+=1

if (keyDown("s")){
  player.height=25
}
else{
  player.height=50
}

if (player.isTouching(mapa)){
mapa.scale= 0.4
}
else{
  mapa.scale = 0.04
}



player.collide(plataformas)

chave.x = player.x +34
chave.y = player.y



//camera.position.x=player.x
//camera.position.y=windowHeight-385


  drawSprites();
}
