function preload()
{
    img = loadImage("bottle.jpg");
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
    text("Bottle",110,30);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(100,10,420,390);

}