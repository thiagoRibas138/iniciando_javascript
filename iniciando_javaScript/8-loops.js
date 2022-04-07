console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = `Salvador`;

listaDeDestinos.push(`Curitiba`) //adicinando item na lista
console.log("\n Destinos possiveis:" )

const podeComprar = idadeComprador >= 18 ||  estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true; 
        break;
    }else{ 
       destinoExiste = false;
    }
    contador += 1;
} 

console.log("Destino Existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe, tivemos um Erro!");
}





for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        }
}