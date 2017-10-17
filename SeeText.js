/**
 * Created by andre on 16/10/2017.
 */

var ramona = "La Ramona es la más gorda de las mozas de mi pueblo Ramona, te quiero. Tiene un globo por cabeza y no se le ve el pescuezo. Ramona, te quiero. Sus piernas son dos columnas su trasero es un pandero. Ramona, te quiero. Le han hecho una cama con cuatro vigas de hierro,  y cuando se acuesta tiembla el suelo de mi pueblo. Le han hecho una silla en casa del cerrajero,  con catorce patas pa que resista su cuerpo. La Ramona es barrigona,  su cuerpo da miedo verlo. Ramona, te quiero. La Ramona es pechugona, tie dos cantaros por pechos. Ramona, te quiero. Los brazos de la Ramona son más anchos que mi cuerpo. Ramona, te quiero. Le han hecho un retrato en casa del retratero, como era tan gorda solo ha salío medio cuerpo. Se ha comprado un vestido colorao de terciopelo hecho de volantes con cien capas de torero. ¡A bailar mi Ramona, pechugona! La Ramona se ha fugao con el hijo del cartero. Ramona, te quiero. Como no cabía en un tren se la lleva en un velero. Ramona, te quiero. El velero se ha ido a pique por el exceso de peso. Ramona, te quiero. Va dando zarpazos pensando en su salvamento, pero no hay cristiano que pueda con tanto peso. A lo lejos viene un barco de balleneros, han tirao las redes, las remolcan por los pelos.A bailar, pechugona. ¡Ay, mi Ramona! Creyéndola una ballena la han cazado unos balleneros. Ramona, te quiero. Sentadito en una orilla llora el hijo del cartero Ramona, te quiero. Se ha quedao sin su Ramona por no calcular el peso Ramona, te quiero Ramona, te quiero Ramona, te quiero Ramona, te quiero";
var txt;
var colors = {};
var tamany;
var canvas;

function setup() {
    document.getElementById('input').value = ramona;
    let rawtext = ramona;
    rawtext = rawtext.replace(/[.,!¡?¿()<>]/g, "");
    tamany = rawtext.length;
    txt = rawtext.split(" ");
    canvas = createCanvas(txt.length, txt.length);
    frameRate(1);
    console.log(txt);
}

function draw(){
    noStroke();
    background(0);
    for (let i = 0; i < txt.length; i++){
        for (let j = i; j < txt.length; j++){
            if (txt[i] == txt[j]) {
                if (!(txt[i] in colors)) {
                    colors[txt[i]] = [random(0, 255), random(0, 255), random(0, 255)];
                }
                pintaparellapixels(i, j, colors[txt[i]]);
            }
        }
    }
}

function clic(){
    let rawtext = document.getElementById("input").value;
    rawtext = rawtext.replace(/[.,!¡?¿<>()]/g, "");
    tamany = rawtext.length;
    txt = rawtext.split(" ");
    console.log(txt);
    canvas.size(txt.length, txt.length);
    draw();
}

function pintaparellapixels(x, y, color) {
    fill(color,70);
    rect(x, y, 1, 1);
    rect(y, x, 1, 1);
}