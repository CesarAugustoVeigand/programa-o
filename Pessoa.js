class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// ------------------------------------
// TRECHO DE EXEMPLO DE TESTE (SOLUÇÃO)
// ------------------------------------

// 1. Crie uma instância da classe Pessoa com valores fictícios.
const pessoa1 = new Pessoa("Alice", 25);

// 2. Chame o método apresentar() dessa instância.
pessoa1.apresentar();

// 3. Mostre o resultado esperado no console.
console.log("\nResultado Esperado no Console:");
console.log("Olá, meu nome é Alice e tenho 25 anos.");
