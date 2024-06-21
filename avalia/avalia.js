var actjobs=new Array();var usersArray=new Array();var onlyJobs = new Array();
var actNames=["Seres vivos","Especialidades médicas"];
function dameData(){var fecha=new Date();var diames=fecha.getDate();var mes=fecha.getMonth() +1 ;var ano=fecha.getFullYear();var data=diames+" / "+mes+" / "+ano;return data;}
function contaIntentos(num){
	var cantos=0;
	var taboaAct=window.opener.taboaIntentos;
	for (i=0;i<taboaAct.length;i++){
		if (parseInt(window.opener.taboaIntentos[i].ind)==num){cantos=cantos+1;}
	}
	return cantos;
}
function damePuntos(num){
	var cantos=0;
	var taboaAct=window.opener.taboaIntentos;
	for (i=0;i<taboaAct.length;i++){
		if (parseInt(window.opener.taboaIntentos[i].ind)==num){cantos=window.opener.taboaIntentos[i].puntos;}
	}
	return cantos;
}
function dameIntentos(num){
     var activ="ima"+num;
	var cantos=0;
	var taboaAct=window.opener.taboaIntentos;
	for (i=0;i<taboaAct.length;i++){
		if (parseInt(window.opener.taboaIntentos[i].ind)==num){
  		   cantos=window.opener.taboaIntentos[i].intentos;
                var eleIma=document.getElementById(activ);
                if (window.opener.taboaIntentos[i].estado=="exec"){ eleIma.src="images/cog.png"}
                if (window.opener.taboaIntentos[i].estado=="temp"){ eleIma.src="images/clock_delete.png"}
                if (window.opener.taboaIntentos[i].estado=="ok"){ eleIma.src="images/accept.png"}
                if (window.opener.taboaIntentos[i].estado=="erro"){ eleIma.src="images/exclamation.png"}
             }
	}
	return cantos;
}
function dameEstado(num){
	var cantos=0;
	var taboaAct=window.opener.taboaIntentos;
	for (i=0;i<taboaAct.length;i++){
		if (parseInt(window.opener.taboaIntentos[i].ind)==num){cantos=window.opener.taboaIntentos[i].estado;}
	}
	return cantos;
}
function dameHora(){
	var hora;
	var data=new Date();
	if (data.getMinutes()<10){hora=data.getHours() +":0"+data.getMinutes()+" h";}
     else{hora=data.getHours() +":"+data.getMinutes()+" h";}
     return hora;
}
function dameInforme(num){
	var informe; var cantos=0;
     informe='<table id="info" width="100%" border="0"><tr><td width="8%"><strong>Nº</strong></td><td width="19%"><strong>Inicio</strong></td><td width="19%"><strong>Fin</strong></td><td width="16%"><strong>Estado</strong></td><td width="19%"><strong>intentos:</strong></td><td width="19%"><strong>puntos:</strong></td></tr>';
	var taboaAct=window.opener.taboaIntentos;
	for (i=0;i<taboaAct.length;i++){
   	   if (parseInt(window.opener.taboaIntentos[i].ind)==num){
           cantos=cantos+1;
 	      informe=informe+"<tr><td><strong>"+cantos+"</strong></td><td>"+window.opener.taboaIntentos[i].hinicio+"</td><td>"+window.opener.taboaIntentos[i].hfin+"</td><td>";
           var srcIma="";
           if (window.opener.taboaIntentos[i].estado=="exec"){ srcIma="images/cog.png"}
           if (window.opener.taboaIntentos[i].estado=="temp"){ srcIma="images/clock_delete.png"}
           if (window.opener.taboaIntentos[i].estado=="ok"){ srcIma="images/accept.png"}
           if (window.opener.taboaIntentos[i].estado=="erro"){ srcIma="images/exclamation.png"}
           informe=informe+'<img src="'+srcIma+'"/>';
           informe=informe+"</td><td>"+window.opener.taboaIntentos[i].intentos+"</td><td>"+window.opener.taboaIntentos[i].puntos+"</td></tr>";
	   }
     }
	informe=informe+"</table>";
	tooltip.show(informe);
}
function dameCorrectas(){
   var cantos=0;
   for (z=0;z<2;z++){
      if (dameEstado(z)=="ok"){cantos=cantos+1;}
   }
   return cantos;
}
function damePuntosTotal(){
   var cantos=0;
   for (z=0;z<2;z++){
    cantos=cantos+parseInt(damePuntos(z));
   }
   return cantos;
}
var tooltip=function(){
	var id = "tt"; var top = 3; var left = 3; var maxw = 510; var speed = 10; var timer = 20; var endalpha = 95;
	var alpha = 0; var tt,t,c,b,h; var ie = document.all ? true : false;
	return{
  	   show:function(v,w){
  	      if(tt == null){
		tt = document.createElement("div");
		tt.setAttribute("id",id);
		t = document.createElement("div");
		t.setAttribute("id",id + "top");
		c = document.createElement("div");
		c.setAttribute("id",id + "cont");
		b = document.createElement("div");
		b.setAttribute("id",id + "bot");
		tt.appendChild(t);
		tt.appendChild(c);
		tt.appendChild(b);
		document.body.appendChild(tt);
		tt.style.opacity = 0;
		tt.style.filter = "alpha(opacity=0)";
  	        document.onmousemove = this.pos;
	   }
  	   tt.style.display = "block";
  	   c.innerHTML = v;
        tt.style.width = w ? w + "px" : "auto";
        if(!w && ie){
           t.style.display = "none";
           b.style.display = "none";
           tt.style.width = tt.offsetWidth;
           t.style.display = "block";
           b.style.display = "block";
         }
  	    if(tt.offsetWidth > maxw){tt.style.width = maxw + "px"}
            h = parseInt(tt.offsetHeight) + top;
            clearInterval(tt.timer);
            tt.timer = setInterval(function(){tooltip.fade(1)},timer);
         },
         pos:function(e){
 	    var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
  	    var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
         if (u-h<0) { tt.style.top ="0px";}
  	    else{ tt.style.top = (u - h) + "px";}
         tt.style.left = (l + left) + "px";},
  	    fade:function(d){
            var a = alpha;
            if((a != endalpha && d == 1) || (a != 0 && d == -1)){
               var i = speed;
               if(endalpha - a < speed && d == 1){
                  i = endalpha - a;
               }else if(alpha < speed && d == -1){
                  i = a;
             }
             alpha = a + (i * d);
             tt.style.opacity = alpha * .01;
             tt.style.filter = "alpha(opacity=" + alpha + ")";
             }else{
             clearInterval(tt.timer);
             if(d == -1){tt.style.display = "none"}
           }
        },
        hide:function(){
        clearInterval(tt.timer);
        tt.timer = setInterval(function(){tooltip.fade(-1)},timer);}};}();
