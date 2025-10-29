// Trecho de código que cria o array turma (Substituindo o código do "exercício 3 ACIMA")
const turma = [
  { nome: "Mariana", nota: 8.5 },
  { nome: "Ricardo", nota: 6.8 },
  { nome: "Fernanda", nota: 9.0 },
  { nome: "Lucas", nota: 5.5 },
  { nome: "Gustavo", nota: 7.0 } // Nota limite, será aprovado
];

// Laço for com estrutura condicional
for (let aluno of turma) {
  if (aluno.nota >= 7) {
    console.log(aluno.nome + " está aprovado");
  } else {
    console.log(aluno.nome + " está reprovado");
  }
}
