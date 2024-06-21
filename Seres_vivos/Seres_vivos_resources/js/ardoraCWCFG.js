//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=5; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN, LO HAZ LOGRADO!"; messageTime=""; messageError="Lo haz intentado, vamos otra vez!"; messageErrorG="Lo haz intentado, vamos otra vez!"; messageAttempts="3"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2VyZXNfdml2b3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qw==","RQ==","TA==","VQ==","TA==","QQ==","Og==","SQ==","Og==","Og==","Uw==","RQ==","Ug==","RQ==","Uw=="],["SA==","Uw==","Og==","Og==","QQ==","Og==","RQ==","Tg==","RQ==","Ug==","Rw==","SQ==","QQ==","Og==","SQ=="],["Tw==","VA==","Og==","Og==","Rw==","Og==","Og==","RA==","Og==","Og==","Og==","Og==","Og==","Og==","Uw=="],["Tg==","Ug==","Og==","Og==","VQ==","Og==","Og==","SQ==","Og==","Og==","Og==","Og==","Og==","Og==","VA=="],["Og==","VQ==","Og==","Og==","Tg==","Og==","Og==","Vg==","Og==","Og==","Og==","Og==","Og==","Og==","RQ=="],["Og==","Qw==","Og==","Og==","QQ==","Og==","SA==","SQ==","Qg==","Ug==","SQ==","RA==","Tw==","Og==","TQ=="],["Og==","VA==","Og==","Og==","Og==","Og==","Og==","RA==","Og==","Og==","Og==","Og==","Og==","Og==","QQ=="],["TA==","VQ==","Wg==","Og==","Og==","Og==","Og==","VQ==","Og==","Og==","Og==","Og==","Og==","Og==","Uw=="],["Og==","Ug==","Og==","Og==","Og==","Og==","Og==","Tw==","Ug==","Rw==","QQ==","Tg==","Tw==","Uw==","Og=="],["SA==","QQ==","Qg==","SQ==","VA==","QQ==","VA==","Og==","Og==","Og==","Og==","SQ==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Vg==","SQ==","Vg==","Tw==","Uw==","Og=="],["Og==","Og==","Og==","Og==","Og==","Tg==","SQ==","VA==","Ug==","Tw==","Rw==","RQ==","Tg==","Tw==","Og=="],["Qg==","SQ==","Tw==","TA==","Tw==","Rw==","Tw==","Og==","Og==","Og==","Og==","TA==","Og==","TA==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","RQ==","Og==","Og==","Og=="],["Qw==","Tw==","Tg==","Uw==","VQ==","TQ==","SQ==","RA==","Tw==","Ug==","RQ==","Uw==","Og==","Og==","Og=="]];
var x1=[1,1,7,11,8,10,6,7,1,1,1,1,2,5,8,15,12];
var y1=[1,1,2,1,9,11,12,6,13,8,10,15,1,1,1,1,9];
var x2=[1,6,13,15,14,14,14,13,7,3,7,12,2,5,8,15,12];
var y2=[4,1,2,1,9,11,12,6,13,8,10,15,10,6,9,8,15];
var imaCW=["","","","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","","","",""];
var defCW=["Es un acrónimo mnemotécnico de los cuatro elementos más comunes en los organismos vivos: carbono, hidrógeno, oxígeno y nitrógeno.","Unidad fundamental de los organismos vivos, capaz de reproducción independiente y formada por un citoplasma rodeado por una membrana.","Se define como la capacidad para realizar un trabajo, lo cual, en términos biológicos, puede considerarse como la habilidad de generar algún tipo de cambio.","Los _______ vivos son organismos de organización molecular compleja caracterizados por poder desarrollar diferentes comunicaciones."," Parte del cuerpo formada por células y tejidos que cumple una función específica.","Que tienen vida","Es un elemento químico de número atómico 7, símbolo N, su masa atómica es de 14,0067 g/mol y en condiciones normales forma un gas diatómico que constituye del orden del 78 % del aire atmosférico.​ ","Dicho de un animal o de un vegetal: Procreado por dos individuos de distinta especie.","Científico que estudia los seres vivos y su relación con el medio ambiente. ","La parte de la radiación electromagnética que puede ser percibida por el ojo humano.","Lugar de condiciones apropiadas para que viva un organismo, especie o comunidad animal o vegetal.","Organismo que no puede producir su propio alimento, sino que se nutre de otras fuentes de carbono orgánico, principalmente materia vegetal o animal.","Disposición o modo de estar relacionadas las distintas partes de un conjunto.","Depósito natural de agua, generalmente dulce y de menores dimensiones que el lago.","Un organismo único que puede realizar funciones vitales (como crecimiento, reproducción, respuesta a estímulos y metabolismo) de manera independiente.","Conjuntos de órganos ordenados que están relacionados e interactúan entre sí para cumplir una determinada función fisiológica.","Manera en que se organizan los seres vivos, desde lo más simple a lo más complejo."];
var altCW=["","","","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
