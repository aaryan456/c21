var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune

function setup() {
  createCanvas(1360,1300);
 sun =  createSprite(675,675, 50, 50)
 sun.scale = 0.6
 //sun.addImage("s.jpg")
 mercury =  createSprite(775, 775, 20, 20);
 venus = createSprite(1085, 885, 30, 30)
 earth = createSprite(195, 995, 37, 37)
 mars = createSprite(1095, 1195, 33, 33)
 jupiter = createSprite(895, 1345, 80, 80)
saturn =  createSprite(595, 300, 70, 70)
 uranus = createSprite(295, 200, 50, 50)
 neptune = createSprite(396, 100, 45,45)
}

function draw() {
  background(0);
  sun.display()
  sun.shapeColor = "yellow"
  if(World.frameCount%20==0){
  sun.scale = sun.scale+0.7
 }
  sun.setCollider("rectangle",0,0,sun.width,sun.height)
  if(sun.isTouching(mercury)){
    mercury.destroy()
  }
  mercury.shapeColor = "silver"
  venus.shapeColor = "brown"
  earth.shapeColor = "green"
  mars.shapeColor = "red"
  jupiter.shapeColor = "brown"
  saturn.shapeColor = "white"
  uranus.shapeColor = "blue"
  venus.shapeColor = "blue"
  neptune.shapeColor = "blue"
  mercury.display();
  
  
  venus.display()
  if(sun.isTouching(venus)){
    venus.destroy()
  }
  earth.display()
  if(sun.isTouching(earth)){
    earth.destroy()
  }

  mars.display()
  if(sun.isTouching(mars)){
    mars.destroy()
  }
  jupiter.display()
  if(sun.isTouching(jupiter)){
    jupiter.destroy()
  }
  saturn.display()
  if(sun.isTouching(saturn)){
    saturn.destroy()
  }
  uranus.display()
  if(sun.isTouching(uranus)){
    uranus.destroy()
  }
  neptune.display()
  if(sun.isTouching(neptune)){
    neptune.destroy()
  }

  
    
  
   
  
  drawSprites();

}