function mascara(){
    var altura = document.getElementById("altura");

    if(altura.value.length == 1){
        altura.value += '.';
    }

    console.log(altura.value)
}

function resultado(){
    var peso = document.getElementById("peso").value;
    let alt = altura.value;

    let imc = peso/(alt*alt);
    let imcFormat = imc.toFixed(2);

    document.getElementById("imc").innerHTML = 'Seu IMC: ' + imcFormat;

    if(imcFormat < 18.5){
        document.getElementById("classificacao").innerHTML = 'Classificação: Abaixo do peso normal'
    } else if(imcFormat >= 18.5 || imcFormat <= 24.9){
        document.getElementById("classificacao").innerHTML = 'Classificação: Peso normal'
    } else if(imcFormat >= 25 || imcFormat <= 29.9){
        document.getElementById("classificacao").innerHTML = 'Classificação: Excesso de peso'
    } else if(imcFormat >= 30 || imcFormat <= 34.9){
        document.getElementById("classificacao").innerHTML = 'Classificação: Obesidade classe I'
    } else if(imcFormat >= 35 || imcFormat <= 39.9){
        document.getElementById("classificacao").innerHTML = 'Classificação: Obesidade classe II'
    } else{
        document.getElementById("classificacao").innerHTML = 'Classificação: Obesidade classe III'
    }
    
}

function limpar(){
    altura.value = ''
    peso.value = ''

    document.getElementById("classificacao").innerHTML = ''
    document.getElementById("imc").innerHTML = ''
}

