//funcion encriptar
function encriptar() {

    var texto = document.querySelector("#input-texto").value;

    //Convertidor de las letras a remplazar
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector("#text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

}

var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar() {

    var texto = document.querySelector("#input-texto").value;

    //Convertidor de las letras a remplazar
    var textoCifrado = texto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.querySelector("#text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

}

//Creación del boton de copiar

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copyToClipboard() {
    /* Obtener el elemento de entrada */
    var inputElement = document.getElementById("text-input-salida");

    /* Seleccionar el texto dentro del elemento de entrada */
    inputElement.select();

    /* Copiar el texto al portapapeles del navegador */
    document.execCommand("copy");

    /* Alerta o mensaje en la consola */
    alert("Texto copiado al portapapeles: " + inputElement.value);
  }