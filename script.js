var expressao ='';
var memoria = ''; 

document.querySelectorAll('.botao').forEach(item => {
   
   item.addEventListener('click',event => {
      
       switch(item.innerHTML){

            case 'C':
            expressao = '';
            document.getElementById('expressao').innerHTML = "";
                document.getElementById('resultado').innerHTML = "";
                break;

            case '+/-':
                var resultado = document.getElementById('expressao').innerHTML;
                var resultadoo = resultado;
            
                resultadoo = resultadoo * -1;
            
                document.getElementById('resultado').innerHTML = resultadoo;
                break;

            case '%':
                var resultado = document.getElementById('expressao').innerHTML;

                if(resultado)
                {
                    var resultadoo = resultado/100;
                    document.getElementById('resultado').innerHTML = resultadoo;
                    document.getElementById('expressao').innerHTML = '';
                }
                else
                {
                    document.getElementById('resultado').innerHTML = "0";
                }
                break;

           case 'OFF':
              window.location.reload();
              break;
            
           case '√':
            var resultado = document.getElementById('expressao').innerHTML;
    
            if(resultado)
            {
                var resultadoo = Math.sqrt(expressao);
                document.getElementById('resultado').innerHTML = resultadoo;
                document.getElementById('expressao').innerHTML = '';
            }
            else
            {
                document.getElementById('resultado').innerHTML = "0";
                document.getElementById('expressao').innerHTML = '';
            } 
            break;

            case 'CE': // bug (não apaga de verdade)
                var resultado = document.getElementById('expressao').innerHTML;
                document.getElementById('expressao').innerHTML = resultado.substring(0, resultado.length -1);
                break; 
           case '=':
              document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML + ' = ';
              document.getElementById('resultado').innerHTML = eval(expressao);
              expressao = '';
              document.getElementById('expressao').innerHTML = '';
           break;
           case 'MC':
               memoria = '';
               document.getElementById('m').innerHTML = "";
           break;
           case 'MR':
               if(memoria != ''){
                  expressao += memoria;
                   document.getElementById('resultado').innerHTML = '';
                   document.getElementById('resultado').innerHTML = expressao;
               }
           break;
            case 'M-':
                var mmenos = document.getElementById('resultado').innerHTML;
                memoria = memoria - mmenos;
                if(memoria != ''){
                    document.getElementById('m').innerHTML = "M";
                    if(memoria != ''){
                        memoria = eval(document.getElementById('resultado')).innerHTML;
                     }else{
                        memoria = eval(document.getElementById('resultado')).innerHTML;
                     }
                }
                
            break;
           case 'M+':
               if(document.getElementById('resultado').innerHTML != ''){
                    document.getElementById('m').innerHTML = "M";
                  
                   if(memoria != ''){
                      memoria = eval(memoria) + eval(document.getElementById('resultado').innerHTML);
                   }else{
                      memoria = eval(document.getElementById('resultado')).innerHTML;
                   }
                  
               }
           break;
           default:
               expressao += item.innerHTML;
               document.getElementById('resultado').innerHTML = '';
               document.getElementById('expressao').innerHTML = expressao;
       }
       
   });
   
}); 

// efeito 3d

const card = document.querySelector('.container');

    card.addEventListener("mousemove", cardEffect);
    card.addEventListener("mouseleave", cardBack);
    card.addEventListener("mouseenter", cardEnter);

    function cardEffect(event)
    {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth/2;
        const centerY = card.offsetTop + cardHeight/2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;
        
        const rotateX = ((+1)*20*positionY/(cardHeight/2)).toFixed(2);
        const rotateY = ((-1)*20*positionX/(cardWidth/2)).toFixed(2);

        console.log(rotateX,rotateY);

        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    function cardBack(event)
    {
        card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition()
    {
        clearInterval(card.transitionId);
        card.style.transition = 'transform 1000ms';
        card.transitionId = setTimeout(() => {
            card.style.transition = '';
        },400);
    }

    function cardEnter(event)
    {
        cardTransition();
    }