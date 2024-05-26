var div = document.getElementById("resp");

function conversor(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let graus = document.getElementById("graus").value;
    let text;

    switch(graus){
        case "fah":
            valor2 = (valor1 * 1.8) + 32;
            text = `<p>${valor2}ºF  </p>`;
            break;
        case "kel": 
            valor2 = valor1 + 273
            text = `<p>${valor2}ºK </p>`;
    }

    div.innerHTML = text;
}