function encrypt(text) {
    let result = text.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return result
}
//Función que desencripta el texto
function desencriptar(textoEncriptado) {
    return textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-copiar').classList.add('hidden');

    //Proceso para encriptar texto
    document.getElementById('btn-encriptar').addEventListener('click', function() {
        const textoEntrada = document.getElementById('texto-entrada').value;
        const textoEncriptado =  encrypt(textoEntrada);
        document.getElementById('texto-encriptado').textContent = textoEncriptado

        //Esconde la imagen del muneco
        document.getElementById('img-muneco').classList.add('hidden');

        // Muestra el boton copiar
        document.getElementById('btn-copiar').classList.remove('hidden');

        //Opcional: Esconder cm-title y cm-description al encriptar
        document.querySelector('.cm-title').classList.add('hidden');
        document.querySelector('.cm-description').classList.add('hidden');
    });

    //Proceso para copiar texto
    document.getElementById('btn-copiar').addEventListener('click', function() {
        const textoEncriptado = document.getElementById('texto-encriptado').textContent;
        //Copiar el texto encriptado en portapaeles
        navigator.clipboard.writeText(textoEncriptado).then(function() {
            console.log("texto copiado al portapapeles");
        }).catch(function(error) {
            console.error("Error al copiar al portapapeles: ", error);
        });
    });

    // Proceso para desencriptar texto
    document.getElementById('btn-desencriptar').addEventListener('click', function() {
        const textoEncriptado = document.getElementById('texto-encriptado').textContent;
        const textoDesencriptado = desencriptar(textoEncriptado);
        document.getElementById('texto-encriptado').textContent = textoDesencriptado;

        // Mostrar la imagen del muñeco si no hay texto desencriptado
        if (textoDesencriptado.trim() === "") {
            document.getElementById('img-muneco').classList.remove('hidden');
        } else {
            document.getElementById('img-muneco').classList.add('hidden');
        }
    });
});
