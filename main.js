function setup() {
    cuadro=createCanvas(540,370);
    cuadro.position(480,160);
}
function preload() {
    coco=loadImage("mani.jpg");
}
function draw() {
    image(coco,0,0,540,370);
    fill("blue");
    text("Mani",360,137);
    noFill();
    stroke("burlywood");
    strokeWeight(07);
    rect(360,160,120,130);

    fill("blue");
    text("Isabella",220,83);
    noFill();
    stroke("pink");
    strokeWeight(07);
    rect(210,90,140,190);
}