var expressao ='';
var memoria = '';
var resultado = '0';

function insert(num)
{
    if (document.getElementById('resultado').innerHTML == "0")
    {
        document.getElementById('resultado').innerHTML = num;
    }
    else{
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
}

function apagar()
{
    document.getElementById('resultado').innerHTML = "0";
    var resultado = document.getElementById('resultado').innerHTML;
    resultado.shift(0)
}

function voltar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function resultado(resultado)
{
    var resultado = document.getElementById('resultado').innerHTML;
    
    
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
        
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
    }
}

function invert()
{
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoo = resultado;

    resultadoo = resultadoo * -1;

    document.getElementById('resultado').innerHTML = resultadoo;

}

function porcent()
{
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado)
    {
        var resultadoo = resultado/100;
        document.getElementById('resultado').innerHTML = resultadoo;
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
    }
}

function raiz(resultado)
{
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado)
    {
        var resultadoo = Math.sqrt(resultado);
        document.getElementById('resultado').innerHTML = resultadoo;
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
    }
}

function off()
{
    window.location.reload();
}

function mc()
{
    memoria = '';
}

function mr(resultado,memoria)
{
    if(memoria != ''){
        resultado += memoria;
        document.getElementById('resultado').innerHTML = resultado;
        document.getElementById('expressao').innerHTML = '';
     }
}

function mmenos(resultado)
{
    memoria = memoria - resultado
}

function mmais(memoria)
{
    if(document.getElementById('resultado').innerHTML != ''){
        document.getElementById('m').innerHTML = 'M';
        if(memoria != ''){
           memoria = eval(memoria) + eval(document.getElementById('resultado').innerHTML);
        }else{
           memoria = eval(document.getElementById('resultado')).innerHTML;
        }
    }
}