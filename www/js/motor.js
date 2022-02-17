function calcular() {
    var peso = parseInt(document.getElementById('peso').value);
	var altura = parseInt(document.getElementById('altura').value);
    var imc = parseInt(document.getElementById('imc').value);

    var imc = peso / altura * altura;

    if(imc < 18.5){
        window.alert("Abaixo do peso");
        document.getElementById('tabela').src = "img/Abaixo do peso.png";
    }else if(imc > 18.5 < 24.9){
        window.alert("Peso normal");
        document.getElementById('tabela').src = "img/Peso normal.png";
    }else if(imc > 24.9 < 29.9){
        window.alert("Sobrepeso");
        document.getElementById('tabela').src = "img/Sobrepeso.png";;
    }else if(imc > 29.9 < 34.9){
        window.alert("Obesidaade grau 1");
    }else if(imc > 34.9 < 39.9){
        window.alert("Obesidade grau 2");
    }else if(imc > 39.9){
        window.alert("Obesidade grau 3");
    }
}


