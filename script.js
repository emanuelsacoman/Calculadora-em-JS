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

function raiz()
{
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado)
    {
        resultadoo = Math.sqrt(resultado);
        document.getElementById('resultado').innerHTML = resultadoo;
    }
    if(resultado < 0)
    {
        document.getElementById('resultado').innerHTML = "0";
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
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
function resultado()
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
function off()
{
    document.getElementById('resultado').innerHTML = "";
}

function mc()
{

}
function mr()
{

}
function mmenos()
{

}

function mmais()
{
    var armazem = document.getElementById('resultado').innerHTML;
    alert(armazem);
}
raiz()
{
    var resultadoo = document.getElementById('resultado').innerHTML

    resultado = Math.sqrt(resultadoo);

    document.getElementById('resultado').innerHTML = eval(resultado);
}