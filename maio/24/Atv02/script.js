document.querySelector("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = document.getElementById("id_nome").value;
  let peso = Number(document.getElementById("id_peso").value.replace(",", "."));
  let altura = Number(document.getElementById("id_altura").value.replace(",", "."));

  let resultado = document.getElementById("resultado");

  if (!peso || !altura || altura === 0 || !nome) {
    resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  let imc = peso / (altura * altura);
  let imcFormatado = imc.toFixed(2);

  if (imc < 18.5) {
    resultado.innerHTML = `Olá ${nome}  você está com IMC ${imcFormatado} - <strong>MAGREZA</strong>`;
  } else if (imc < 24.9) {
    resultado.innerHTML = `Olá ${nome}  você está com IMC ${imcFormatado} - <strong>NORMAL</strong>`;
  } else if (imc < 29.9) {
    resultado.innerHTML = `Olá ${nome} você está com IMC ${imcFormatado} - <strong>SOBREPESO</strong>`;
  } else if (imc < 34.9) {
    resultado.innerHTML = `Olá ${nome} você está com IMC ${imcFormatado} - <strong>OBESIDADE GRAU 1</strong>`;
  } else if (imc < 39.9) {
    resultado.innerHTML = `Olá ${nome} você está com IMC ${imcFormatado} - <strong>OBESIDADE GRAU 2</strong>`;
  } else {
    resultado.innerHTML = `                                                                   ${nome} você está com IMC ${imcFormatado} - <strong>OBESIDADE GRAU 3 (MÓRBIDA)</strong>`;
  }
});