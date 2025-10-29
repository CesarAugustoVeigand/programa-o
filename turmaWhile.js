// Cria um objeto 'aluno' com nome e um array de notas
let aluno = {
  nome: "Lucas",
  notas: [7, 8, 9]
};

// Inicializa a variável 'total' para acumular as notas
let total = 0;

// Percorre o array de notas e soma cada valor à variável 'total'
for (let nota of aluno.notas) {
  total += nota;
}

// Calcula a média dividindo o total pela quantidade de notas
console.log("Média: " + (total / aluno.notas.length));
