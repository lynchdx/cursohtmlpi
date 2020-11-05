function ejecuta(){

	var elementos=document.querySelectorAll("#principal p, span"); /*Agarra todos los p del div principal y a los que tienen span-*/


for (var i = 0; i < elementos.length; i++) {
	

	elementos[i].onclick=saludo;
}


}


function saludo(){

	alert("Que hay de nuevo MASTER");
}




window.onload=ejecuta;