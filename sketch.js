const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
    var engine, world,bodies;
    var obstacle;
    var pole,pole1,pole2,pole3,pole4,pole5,pole6;
    var j;
   var ball1;
var push;
var pop;




function setup() {
  createCanvas(410,500);
  
  engine = Engine.create();
  world = engine.world;


 

//main ground isStatic

  var pole_options ={
    isStatic: true
}


//isStatic for poles

var pole2_options ={
  isStatic: true
}

var pole3_options ={
  isStatic: true
}

var pole4_options ={
  isStatic: true
}

var pole5_options ={
  isStatic: true
}

var pole6_options ={
  isStatic: true
}



//main ground
pole= Bodies.rectangle(200,490,10,10,pole_options);
World.add(world,pole);



//poles
pole2= Bodies.rectangle(400,380,10,200,pole2_options);
World.add(world,pole2);

pole3= Bodies.rectangle(300,380,10,200,pole3_options);
World.add(world,pole3);

pole4= Bodies.rectangle(200,380,10,200,pole4_options);
World.add(world,pole4);

pole5= Bodies.rectangle(100,380,10,200,pole5_options);
World.add(world,pole5);

pole6= Bodies.rectangle(00,380,10,200,pole6_options);
World.add(world,pole6);

obstacle=new Obstacle(200,200,10)

obstacle3=new Obstacle(250,200,10);
obstacle4=new Obstacle(300,200,10);
obstacle5=new Obstacle(350,200,10);
obstacle6=new Obstacle(400,200,10);
obstacle7=new Obstacle(150,200,10);
obstacle8=new Obstacle(100,200,10);
obstacle9=new Obstacle(50,200,10);
obstacle10=new Obstacle(00,200,10);

obstacle11=new Obstacle(250,150,10);
obstacle12=new Obstacle(300,150,10);
obstacle13=new Obstacle(350,150,10);
obstacle14=new Obstacle(400,150,10);
obstacle15=new Obstacle(200,150,10);
obstacle16=new Obstacle(50,150,10);
obstacle17=new Obstacle(00,150,10);
obstacle18=new Obstacle(150,150,10);
obstacle19=new Obstacle(100,150,10);


//function for ball

ball1=new Ball(200,200,10)

}

function draw() {
  background("lightblue");  
 Engine.update(engine)
  rectMode(CENTER);
    rect(pole.position.x,pole.position.y,410,20); 
    //cmd for display pole
    rect(pole2.position.x,pole2.position.y,10,200);
    rect(pole3.position.x,pole3.position.y,10,200);
    rect(pole4.position.x,pole4.position.y,10,200);
    rect(pole5.position.x,pole5.position.y,10,200);
    rect(pole6.position.x,pole6.position.y,10,200);

    //cmd for display round obstacles
    obstacle.display();
  
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();
    obstacle8.display();
    obstacle9.display();
    obstacle10.display();
    obstacle11.display();
    obstacle12.display();
    obstacle13.display();
    obstacle14.display();
    obstacle15.display();
    obstacle16.display();
    obstacle17.display();
    obstacle18.display();
   obstacle19.display();

  ball1.display()

}

