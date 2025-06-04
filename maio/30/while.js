// let contador = 0;
// while(contador  < 5){
//     console.log('Contador: ${contador}');
//     contador++;
// }
// let i = 0;
// do{
//     console.log('Contador: ${contador}');
//     i++;
// }while(i < 5);

const prompti = require(`prompt-sync`)();
let nome = prompti("Informe um nome ");
let continuar = true;
while(continuar){
    let nome = prompti("Informe um nome:");
    if(nome == "Yuri"){
        console.log("Acesso Permitido");
        continuar= false;
    }else{
        console.log("Acesso negado")
    }
}
