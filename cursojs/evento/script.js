function tipoflor(){
	alert("es una flor");
}

function daTipoFlor(){
	var imagen=document.getElementByTagName("img")[0];

/*type,function,boolean*/
/*al hacer click, se ejecuta la funcion de nombre tipoflor, y false xq no hay eventos en cadena*/
	imagen.addEventListener("click",tipoflor,false);
}

window.onload=daTipoFlor();