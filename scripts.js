function setup() {
    createCanvas(400,400)
}

function draw() {


 background("#ff0000")
 smileFaceJano();
}

function smileFaceJano()
{
    // skin
    fill("#fdda55");
    circle(200,200,100);

    // right eye
    fill("#000000");
    circle(220,190,25);

    fill("ffffff");
    circle(220,190,10);

    // left eye
    fill("ffffff");
    circle(180,190,25);

    fill("#000000");
    circle(180,190,10);

    // mouth
    fill("#000000");
    arc(200, 210, 30, 30, 0, Math.PI);

    fill("#ff0000");
    arc(200, 220, 15, 10, 0, Math.PI);

    //
    fill("#fdda55");
    arc(200, 140, 55, 10, Math.PI, 0);
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