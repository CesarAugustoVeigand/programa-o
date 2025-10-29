/* === Desafio 1: Medir o Tamanho da Palavra === */

let palavra;

// O laço executa pelo menos uma vez e continua enquanto a palavra tiver 8 ou menos letras.
do {
  palavra = prompt("Digite uma palavra (precisa ter mais de 8 letras):");
  if (palavra === null) {
    // Trata o caso em que o usuário cancela o prompt
    console.log("Operação cancelada.");
    break; 
  }
} while (palavra.length <= 8);

if (palavra !== null) {
    console.log(`Palavra aceita: ${palavra}`);
    console.log(`Tamanho: ${palavra.length} letras.`);
}


/* === Desafio 2: Acumular Valores Imprevisíveis === */

let soma = 0;
let contador = 0;

// O laço continua enquanto a soma for menor ou igual a 500.
while (soma <= 500) {
  // Gera um número aleatório inteiro entre 1 e 100
  const novoNumero = Math.floor(Math.random() * 100) + 1;
  soma += novoNumero;
  contador++;
  console.log(`Passo ${contador}: Adicionado ${novoNumero}. Soma atual: ${soma}`);
}

console.log("\nAcúmulo concluído!");
console.log(`Soma final: ${soma}`);
console.log(`Total de números gerados: ${contador}`);



/* === Desafio 3: Verificar Faixa Indicada (Tamanho de Calçado) === */

let tamanhoCalcado;
const MIN_TAMANHO = 34;
const MAX_TAMANHO = 44;

// O laço executa pelo menos uma vez e continua enquanto o tamanho não estiver na faixa.
do {
  const entrada = prompt(`Digite o tamanho do calçado (entre ${MIN_TAMANHO} e ${MAX_TAMANHO}):`);
  
  if (entrada === null) {
    console.log("Operação cancelada.");
    tamanhoCalcado = 0; // Sai do loop se o usuário cancelar
    break;
  }
  
  tamanhoCalcado = parseInt(entrada);
  
  // Verifica se a entrada é um número e está na faixa
  if (isNaN(tamanhoCalcado) || tamanhoCalcado < MIN_TAMANHO || tamanhoCalcado > MAX_TAMANHO) {
    alert(`Entrada inválida. Por favor, digite um número entre ${MIN_TAMANHO} e ${MAX_TAMANHO}.`);
  }
} while (tamanhoCalcado < MIN_TAMANHO || tamanhoCalcado > MAX_TAMANHO);

if (tamanhoCalcado >= MIN_TAMANHO && tamanhoCalcado <= MAX_TAMANHO) {
    console.log(`Tamanho de calçado aceito: ${tamanhoCalcado}`);
}




/* === Desafio 4: Testar Múltiplas Condições === */

let numero = 0;
let contador = 0;

// O laço continua enquanto o número não for múltiplo de 3 E de 5.
while (numero % 3 !== 0 || numero % 5 !== 0 || numero === 0) {
  // Gera um número aleatório inteiro entre 1 e 100
  numero = Math.floor(Math.random() * 100) + 1;
  contador++;
  console.log(`Tentativa ${contador}: Número gerado ${numero}`);
}

console.log("\nCondição atingida!");
console.log(`O número ${numero} é múltiplo de 3 e de 5.`);
console.log(`Foram necessárias ${contador} tentativas.`);




/* === Desafio 5: Verificar Faixa Etária (Idade) === */

let idade;
const IDADE_MINIMA = 18;
const IDADE_MAXIMA = 60;

// O laço executa pelo menos uma vez e continua enquanto a idade não estiver na faixa.
do {
  const entrada = prompt(`Digite sua idade (entre ${IDADE_MINIMA} e ${IDADE_MAXIMA}):`);
  
  if (entrada === null) {
    console.log("Operação cancelada.");
    idade = 0; // Sai do loop se o usuário cancelar
    break;
  }
  
  idade = parseInt(entrada);
  
  // Verifica se a entrada é um número e está na faixa
  if (isNaN(idade) || idade < IDADE_MINIMA || idade > IDADE_MAXIMA) {
    alert(`Idade inválida. Por favor, digite um número entre ${IDADE_MINIMA} e ${IDADE_MAXIMA}.`);
  }
} while (idade < IDADE_MINIMA || idade > IDADE_MAXIMA);

if (idade >= IDADE_MINIMA && idade <= IDADE_MAXIMA) {
    console.log(`Idade aceita: ${idade} anos.`);
}





/* === Desafio 6: Verificar Presença de Caracteres (Senha) === */

let senha;
let temLetra = false;
let temNumero = false;

// Função auxiliar para verificar se a senha atende aos requisitos
function validarSenha(s) {
    // Expressões Regulares (Regex) para verificar a presença de letras e números
    const regexLetra = /[a-zA-Z]/;
    const regexNumero = /[0-9]/;
    
    temLetra = regexLetra.test(s);
    temNumero = regexNumero.test(s);
    
    return temLetra && temNumero;
}

// O laço executa pelo menos uma vez e continua enquanto a senha for inválida.
do {
    senha = prompt("Digite uma senha (deve conter pelo menos 1 letra e 1 número):");
    
    if (senha === null) {
        console.log("Operação cancelada.");
        break; 
    }
    
    if (senha.length === 0) {
        alert("A senha não pode ser vazia.");
        continue;
    }
    
    if (!validarSenha(senha)) {
        let erro = "A senha é inválida. Precisa ter:";
        if (!temLetra) erro += " 1 letra,";
        if (!temNumero) erro += " 1 número.";
        alert(erro.replace(/,\s*$/, '.')); // Limpa vírgula no final
    }

} while (senha !== null && !validarSenha(senha));

if (senha !== null && validarSenha(senha)) {
    console.log("Senha aceita!");
}





