function preload()
{
    img = loadImage("TV.jpg");
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
    text("Tv",160,250);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(150,230,300,180);

    fill("#FF0000");
    text("Ac",200,70);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(190,50,250,120);

}