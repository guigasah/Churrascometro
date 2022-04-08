// carne - 400g por pessoa + de 6hrs - 650
//cerveja 1200ml por pessoa + 6hrs- 2000ml
//refrigerante/agua- 1000ml p pessoa + 6hrs 1500ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdttotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdttotalcerveja = cervejaPP(duracao) * adultos;
    let qdttotalrefris = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);

resultado.innerHTML = `<p>${qdttotalcarne/1000}Kg de Carne </p>`
resultado.innerHTML+= `<p>${Math.ceil(qdttotalcerveja/355)} Latinhas de Cerveja </p>`
resultado.innerHTML += `<p>${Math.ceil(qdttotalrefris/2000)} Garrafas de Refri </p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 1500
    }
    else {
        return 1000
    }
}

