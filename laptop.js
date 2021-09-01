function preload()
{
    img = loadImage("laptop.jpg");
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
    text("Laptop",150,50);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(110,20,350,390);

    fill("#FF0000");
    text("Phone",190,150);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(180,120,130,215);




}