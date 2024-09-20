// Criação de Arrays
const notas = [6.5, 8.0, 7.5, 9.0, 5.5];

// Acesso aos Elementos
console.log("Primeira nota:", notas[0]); // Exibe a primeira nota
console.log("Última nota:", notas[notas.length - 1]); // Exibe a última nota

// Adiciona uma nova nota ao final do array
notas.push(7.0);
console.log("Após adicionar nova nota:", notas);

// Remove a primeira nota do array
notas.shift();
console.log("Após remover a primeira nota:", notas);

// Iteração com forEach
console.log("Notas individuais:");
notas.forEach(nota => {
    console.log(nota);
});

// Cálculo da Média
const soma = notas.reduce((acc, nota) => acc + nota, 0);
const media = soma / notas.length;
console.log("Média das notas:", media);

// Filtro de Notas
const notasAcimaDeSete = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasAcimaDeSete);

// Ordenação
notas.sort((a, b) => a - b);
console.log("Notas ordenadas em ordem crescente:", notas);

// Busca de Elementos
const contemNotaSeisPontoCinco = notas.includes(6.5);
console.log("O array contém a nota 6.5?", contemNotaSeisPontoCinco);

// Encontre o Índice
const indiceNotaOito = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNotaOito);

// Mapeamento
const notasAoQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasAoQuadrado);
