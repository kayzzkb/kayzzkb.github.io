document.querySelector("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  let num1 = Number(document.getElementById("numero1").value);
  let num2 = Number(document.getElementById("numero2").value);

  
  let resultado = num1 + num2;
  document.getElementById("resultado").innerText = resultado;
  console.log(resultado);
  
  
});