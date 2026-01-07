const total = document.getElementById("total");

let soma = 0;
function calcular(valor){

    let resultado = Number(valor.value);

    if (valor.checked){
        soma += resultado
        total.innerText = (`Total R$${soma.toFixed(2)}`).replace('.', ',');
    }else{
        soma -= resultado
        total.innerText = (`Total R$${soma.toFixed(2)}`).replace('.', ',');
    }
}

