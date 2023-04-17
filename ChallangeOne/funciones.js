function obtener() {
    let valorTextarea = document.getElementById("texto").value;
    return valorTextarea;
}



function encriptar(text){
    
    let palabras = text.split(/[ ,;:]+/);
	console.log(palabras);

	let letras = [];
	let palabraAux = "";
	let encriptadas = [];

	for (let i = 0; i < palabras.length; i++) {
  		const palabra = palabras[i];
  		console.log(palabra);
  		for (let j = 0; j < palabra.length; j++) {
    		const letra = palabra[j];
    		console.log(letra);
    		console.log(palabraAux);

    		if(letra == "a"){
    			//letras.push("ai");
    			palabraAux = palabraAux + "ai";
    		}else
    		 if(letra == "e"){
    			//letras.push("enter");
    			palabraAux = palabraAux + "enter";
    		}
    		if(letra == "i"){
    			//letras.push("imes");
    			palabraAux = palabraAux + "imes";
    		}
    		if(letra == "o"){
    			//letras.push("ober");
    			palabraAux = palabraAux + "ober";
    		}
    		if(letra == "u"){
    			//letras.push("ufat");
    			palabraAux = palabraAux + "ufat";
    		}
    		if(letra != "a" && letra != "e" && letra != "i" &&
    			letra != "o" && letra != "u"){
    		palabraAux = palabraAux + letra;
    		letras.push(letra);
    		
    		}
    	}
   		    		
    		console.log(encriptadas);
    		encriptadas.push(palabraAux);
    		palabraAux = "";
    		//Letras = [0];
  		}

		console.log(letras);
		console.log(encriptadas);

		let textoEncryptado = "";

		for(let indice = 0; indice < encriptadas.length; indice++){
			textoEncryptado = textoEncryptado + " " + encriptadas[indice];
		}

        alert(textoEncryptado);
}



let btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.addEventListener("click", function() {
    let encrip = encriptar(obtener());
    console.log(encrip);
    // Aquí puedes hacer algo con el valor de texto, como encriptarlo
});
	
function desencriptar(text2){
    
	let palabras2 = text2.split(/[ ,;:]+/);
	console.log(palabras2);

	
	let nuevoTexto = text2.replace(/ai/g, "a");
	console.log(nuevoTexto);
	nuevoTexto = nuevoTexto.replace(/enter/g, "e");
	console.log(nuevoTexto);
	nuevoTexto = nuevoTexto.replace(/imes/g, "i");
	console.log(nuevoTexto);
	nuevoTexto = nuevoTexto.replace(/ober/g, "o");
	console.log(nuevoTexto);
	nuevoTexto = nuevoTexto.replace(/ufat/g, "u");
	console.log(nuevoTexto);
    return nuevoTexto;
}

let btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.addEventListener("click", function() {
    let desencrip = desencriptar(obtener());
    console.log(desencrip);
    // Aquí puedes hacer algo con el valor de texto, como encriptarlo
});



	
