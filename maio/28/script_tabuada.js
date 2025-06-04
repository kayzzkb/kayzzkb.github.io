let formulario = document.querySelector("#form-tabuada")
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); 
   
    let numero = Number(document.getElementById('id_numero').value);
    let resultado = document.getElementById('resultado');
    let operacao = document.getElementById('id_operacao').value;

    resultado.innerHTML = ""; 
    
    switch (operacao) {
        case "+":
            for (let i = 1; i <= 10; i++) {
                resultado.innerHTML += `${numero} + ${i} = ${numero + i}<br>`;
            }
            break;

        case "-":
            for (let i = 1; i <= 10; i++) {
                resultado.innerHTML += `${numero} - ${i} = ${numero - i}<br>`;
            }
            break;

        case "*":
            for (let i = 1; i <= 10; i++) {
                resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
            }
            break;

        case "/":
            for (let i = 1; i <= 10; i++) {
                resultado.innerHTML += `${numero} ÷ ${i} = ${(numero / i).toFixed(2)}<br>`;
            }
            break;

        default:
            resultado.innerHTML = "Operação inválida.";
            break;
    }
});