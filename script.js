const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensajeEncriptado");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.textContent = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado) {
    let matrizCodigo =  [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo [i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desEncriptar(textArea.value)
    mensaje.textContent = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desEncriptar(stringDesencriptado) {
    let matrizCodigo =  [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo [i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptado
}



