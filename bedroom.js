function preload()
{
    img = loadImage("bedroom.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}
function back()
{
    window.location="index.html";  
}
function draw()
{
    image(img,0,0,640,420);

    fill("#FF0000");
    text("Bed",170,150);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(150,120,300,280);

    fill("#FF0000");
    text("Table",450,320);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(450,300,200,100);

    fill("#FF0000");
    text("Berrow",240,150);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(220,130,100,150);

}