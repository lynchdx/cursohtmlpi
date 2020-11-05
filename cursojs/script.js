//comentario normal

/*
comentario de bloque
*/





/*Funciones*/
function saludo(){

alert("Clickeaste el mensaje");

}




function despedir(){

	alert("onmouseover el mensaje");
}



function aliniciar(){
	alert("Se carga al iniciar la página");
}

function funciongetElementByTagName(){


}


/*Ejecutar funcion a penas se cargue la página*/
window.onload=aliniciar;


/*Function que afecta a las etiquetas, se usa el getElementByTagName*/

function ejecuta(){

//detecta solo la primera <p>, y activa la función saludo
	document.getElementByTagName("p")[0].onclick=saludo;
}

/*

getElementByTagName(p) = para los elementos de ese tag.
getElementById("porid") = lo pesca si en html, dentro del <p id= "porid"> 



*/