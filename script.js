function criptografiaTexto() {
    var texto = document.querySelector('textarea').value;
    texto = texto.toLowerCase();
    document.getElementById('retangulo__branco').innerHTML = criptografar(texto);
    document.querySelector('textarea').value = '';
};

function criptografar(texto) {
    const vogaisNormal = [
        "a",
        "e",
        "i",
        "o",
        "u",
    ];
    
    const vogaisCriptografar = [
        "ai",
        "enter",
        "imes",
        "ober",
        "ufat"
    ];
    
    var auxtexto = "";
    for (let i = 0; i < texto.length; i++) {
        var encontrou = texto[i];
        for (let j = 0; j < vogaisNormal.length; j++) {
            if (texto[i] == vogaisNormal[j]) encontrou = vogaisCriptografar[j];
        };
        auxtexto += encontrou;
    };
    
    return auxtexto;
    };

function descriptografiaTexto() {
    var texto = document.querySelector('textarea').value;
    texto = texto.toLowerCase();
    document.getElementById('retangulo__branco').innerHTML = descriptografar(texto);
    document.querySelector('textarea').value = '';
};

function descriptografar(texto) {
    const vogaisEquivalente = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
    };

    const vogaisReversas = Object.fromEntries (
        Object.entries(vogaisEquivalente).map(([key, value]) => [value, key])
    );

    for (const [key, value] of Object.entries(vogaisReversas)) {
        texto = texto.split(key).join(value);
    };

    return texto
};

const inputField = document.querySelector('textarea');

inputField.addEventListener('input', function() {
    const caracteresEspeciais = "´\\!@#\\$%\\^&\\*\\(\\)\\+\\=\\.\\-\\/\\,\\[\\]\\{\\}\\|\\:\\;\\'\\\"`~";
    const regex = new RegExp(`[ÀÁÂÃÄÅÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝŸàáâãäåèéêëìíîïòóôõöùúûüỳÿ${caracteresEspeciais}]`, 'g');
    const texto = inputField.value;
    if (regex.test(texto) || texto.toLowerCase() != texto) {
        alert("Por favor, use apenas letras minúsculas, sem acentos e sem caracteres especiais.");
        inputField.value = texto.replace(regex, '').toLowerCase();
    }
});


document.getElementById("copiarBotao").addEventListener("click", function() {
    var textoParaCopiar = document.getElementById('retangulo__branco').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        var botao = document.getElementById("copiarBotao");
        botao.textContent = "Copiado!";
        botao.classList.remove("apresentacao__botao__copiar");
        botao.classList.add("apresentacao__botao__copiado");
        setTimeout(function() {
            botao.textContent = "Copiar Mensagem";
            botao.classList.remove("apresentacao__botao__copiado");
            botao.classList.add("apresentacao__botao__copiar");
        }, 5000);
    });
});

