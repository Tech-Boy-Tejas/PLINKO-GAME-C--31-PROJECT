const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,795,480,10);

    for(var i = 0; i < width; i += 80){
        divisions.push(new Division(i,650,10,300));
    }
    for(var x1 = 40; x1 < width; x1 += 50){
        plinkos.push(new Plinko(x1,75));
    }
    for(var x2 = 15; x2 < width - 10; x2 += 50){
        plinkos.push(new Plinko(x2,175));
    }
    for(var x3 = 15; x3 < width - 10; x3 += 50){
        plinkos.push(new Plinko(x3,275));
    }
    for(var x4 = 15; x4 < width - 10; x4 += 50){
        plinkos.push(new Plinko(x4,375));
    }

    


    Engine.run(engine);

    
}


function draw(){
    background(0);
    
    ground.display();

    if(frameCount % 40 === 0){
        particles.push(new Particle(random(width/2 - 10, width/2 + 10),10,10));
    }
    

    for(var d = 0; d < particles.length; d++){
        particles[d].display();
    }
    for(var j = 0; j < divisions.length; j++){
        divisions[j].display();
    }
    for(var a = 0; a < plinkos.length; a++){
        plinkos[a].display();
    }
    
}