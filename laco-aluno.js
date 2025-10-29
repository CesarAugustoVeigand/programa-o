let turma = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 6 }
];

let soma = 0;
for (let i = 0; i < turma.length; i++) {
  soma += turma[i].nota;
}
let media = soma / turma.length;
console.log("Média da turma: " + media);
