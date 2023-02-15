feliz=[];
amistad="";
cariño=0;
function setup() {
    cuadro=createCanvas(540,370);
    cuadro.position(480,160);
    corazon=ml5.objectDetector('cocossd',tarjeta);
}
function tarjeta() {
    console.log("LISTO :)");
    corazon.detect(coco,amor);
    amistad='LISTO :)';
}
function amor(error,result) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(result);
        feliz=result;
    }
}
function preload() {
    coco=loadImage("mani.jpg");
}
function draw() {
    image(coco,0,0,540,370);
 



    if (amistad=="LISTO :)") {
        for (let index = 0; index < feliz.length; index++) {
            cariño=random(2);
            if (cariño<=1) {
                fill("blue");
                text(feliz[index].label,feliz[index].x-220,feliz[index].y-160);
                noFill();
                stroke("burlywood");
                strokeWeight(07);
                rect(feliz[index].x-200,feliz[index].y-120,feliz[index].width-320,feliz[index].height-250);
            }
            else{
                fill("blue");
                text(feliz[index].label,feliz[index].x-220,feliz[index].y-160);
                noFill();
                stroke("pink");
                strokeWeight(07);
                rect(feliz[index].x-200,feliz[index].y-120,feliz[index].width-320,feliz[index].height-250);
            }
        }
    }
}