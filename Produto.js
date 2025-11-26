class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}
