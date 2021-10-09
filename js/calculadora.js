function somar(){
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;
    resultado = Number.parseInt(n1) + Number.parseInt(n2);
    document.getElementById('result').value = resultado;
}

function sub(){
    n1 = document.getElementById('n1_sub').value;
    n2 = document.getElementById('n2_sub').value;
    resultado = Number.parseInt(n1) - Number.parseInt(n2);
    document.getElementById('result_sub').value = resultado;
}

function multiplicar(){
    n1 = document.getElementById('n1_mul').value;
    n2 = document.getElementById('n2_mul').value;
    resultado = Number.parseInt(n1) * Number.parseInt(n2);
    document.getElementById('result_mul').value = resultado;
}

function dividir(){
    n1 = document.getElementById('n1_div').value;
    n2 = document.getElementById('n2_div').value;
    resultado = Number.parseFloat(n1) / Number.parseFloat(n2);
    document.getElementById('result_div').value = resultado.toFixed(2);
}

function media(){
    n1 = document.getElementById('n1_med').value;
    n2 = document.getElementById('n2_med').value;
    n3 = document.getElementById('n3_med').value;
    resultado = (Number.parseInt(n1) + Number.parseInt(n2) + Number.parseInt(n3)) / 3;
    document.getElementById('result_med').value = resultado.toFixed(2);
    //fixando em apenas duas casas decimais (window.alert(resultado.toFixed(2)))
}

function limpar(){
    document.getElementById('n1').value = null;
    document.getElementById('n2').value = null;
    document.getElementById('result').value = null;
    document.getElementById('n1_sub').value = null;
    document.getElementById('n2_sub').value = null;
    document.getElementById('result_sub').value = null;
    document.getElementById('n1_mul').value = null;
    document.getElementById('n2_mul').value = null;
    document.getElementById('result_mul').value = null;
    document.getElementById('n1_div').value = null;
    document.getElementById('n2_div').value = null;
    document.getElementById('result_div').value = null;
    document.getElementById('n1_med').value = null;
    document.getElementById('n2_med').value = null;
    document.getElementById('result_med').value = null;
}