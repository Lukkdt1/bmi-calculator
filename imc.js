const calcular = document.getElementById('calcular');




function imc () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'underweight.';
        }else if (valorIMC < 25){
            classificacao = 'at a healthy weight.';
        }else if (valorIMC < 30){
            classificacao = 'overweight.';
        }else if (valorIMC < 35){
            classificacao = 'in obesity class I.';
        } else if (valorIMC < 40){
            classificacao = 'in obsesity class II.';
        }else {
            classificacao = 'morbidly obese.';
        }     

        resultado.textContent = `${nome}, your BMI is ${valorIMC} and you are ${classificacao}`

    }else {
        resultado.textContent = 'Fill in all the data above.';
    }

}
 
    

calcular.addEventListener('click',imc);

