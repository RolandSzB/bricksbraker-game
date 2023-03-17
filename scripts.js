function setup() {
    createCanvas(400,400)
}

function draw() {
 background("#ff5555")
smileFaceRoli();
}

function smileFaceRoli(){
     //skin
    fill("#00ff00");
    circle(200, 200, 100);
 
    //right eye
    fill("lightblue");
    circle(220, 190, 15);
    fill("#000000")
    circle(220, 190, 3);
   
    //left eye
    fill("lightblue");
    circle(180, 190, 15);
    fill("#000000")
    circle(180, 190, 3);
 
    //mouth  
    noFill(); 
    arc(200, 230, 40, 15, 0, Math.PI );
}