function preload()
{
    img = loadImage("fruits.jpg");
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
    text("Banana",170,130);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(150,100,350,100);

    fill("#FF0000");
    text("Basket",100,300);
    textSize(20)
    noFill();

    stroke("#FF0000");
    rect(80,280,500,100);


}