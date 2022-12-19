
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");

const sinMensaje = document.querySelector(".sin-mensaje");
const conMensaje = document.querySelector(".con-mensaje");

const input = document.querySelector("#textarea-input");
const output = document.querySelector("#textarea-output");

let primeraVez = true;

function encriptar() {
    if(primeraVez) {
        primeraVez = false;
        sinMensaje.classList.remove("active");
        conMensaje.classList.add("active");
    }
    const texto = input.value;
    let nuevoTexto = "";
    if(!texto) {
        nuevoTexto = "No ha ingresado texto";
        output.value = nuevoTexto;
        return;
    }
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] === "a") nuevoTexto += "ai";
        else if(texto[i] === "e") nuevoTexto += "enter";
        else if(texto[i] === "i") nuevoTexto += "imes";
        else if(texto[i] === "o") nuevoTexto += "ober";
        else if(texto[i] === "u") nuevoTexto += "ufat";
        else nuevoTexto += texto[i];
    }

    output.value = nuevoTexto;
    input.value = "";
}

function desencriptar() {
    if(primeraVez) {
        primeraVez = false;
        sinMensaje.classList.remove("active");
        conMensaje.classList.add("active");
    }

    let texto = input.value;
    if(!texto) {
        texto = "No ha ingresado texto";
        output.value = texto;
        return;
    }
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    output.value = texto;
    input.value = "";
}

function copiar() {
    output.select();
    document.execCommand("copy");
}

btnEncriptar.onclick = encriptar; 
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;