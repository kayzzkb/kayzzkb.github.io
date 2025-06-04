console.log("Estou imprimindo essa informação pelo script externo");

let numero = 42;
let decimal = 3.14;
let texto = "Olá Mundo";
let ativo = true;
let indefinido = undefined
let nao_numero = "RAr"; 
let vazio = null;
let simbolo = Symbol("id");
let numero_grande =  9007199254740991n; 

let pessoa = {
    nome: "Ana", idade: 20
};
let cores = ["vermelho", "verde", "azul"];
let hoje = new Date();
let regex = /\d+/;

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof indefinido);
console.log(typeof cores);
console.log(typeof decimal);
console.log(typeof ativo);
console.log(typeof simbolo);
console.log(typeof numero_grande);
console.log(typeof vazio);
console.log (hoje);
console.log(typeof regex);
 
alert("Meu nome " + pessoa.nome);
console.log(pessoa);
alert(cores)
document.write("Valor impresso ")