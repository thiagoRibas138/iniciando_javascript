console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listasDeDestinos.push(`Curitiba`) //adicinando item na lista
console.log("Destinos possiveis:")
// console.log(salvador, saoPaulo, rioDeJaneiro);

listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);
console.log(listasDeDestinos[1], listasDeDestinos[2]);