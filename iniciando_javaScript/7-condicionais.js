console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = true;


listaDeDestinos.push(`Curitiba`) //adicinando item na lista
console.log("Destinos possiveis:")

// if (idadeComprador >= 18) {

//     console.log("Comprador maior de idadade");
//     listaDeDestinos.splice(1, 1); // removendo item

// } else if (estaAcompanhada == true) {
 
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removedo item

// } else {
 
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 ||  estaAcompanhado == true) {

    console.log("Boa Viagem! \n\n");
    listaDeDestinos.splice(2, 1); 
    //removendo item

} else {
 
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!")
}else{
    console.log("Você não pode embarcar");
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
