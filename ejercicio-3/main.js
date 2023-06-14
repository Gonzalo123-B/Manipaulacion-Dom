
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    
    let operator = document.getElementById('operador');
    let btn= document.getElementById('calcularResultado')
    let result;
    let resultado = document.getElementById('resultado')

    btn.addEventListener('click', ()=>{
        let numero1 = parseInt(num1.value)
        let numero2 = parseInt(num2.value)
        switch (operator.value) {
            case 'suma':
              result = numero1 + numero2;
              break;
            case 'resta':
              result = numero1 - numero2;
              break;
            case 'multiplicacion':
              result = numero1 * numero2;
              break;
            case 'division':
              result = numero1 / numero2;
              break;
            default:
              result = 'Operación no válida';
          }
            
    resultado.innerHTML = 'Resultado: ' + result;

    })
  

  
