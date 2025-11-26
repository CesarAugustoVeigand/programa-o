/**
 * Busca um produto em uma lista de objetos pelo nome.
 *
 * @param {Array<Object>} listaProdutos - Uma lista de objetos com as propriedades {nome, preco}.
 * @param {string} nomeBusca - O nome do produto que se deseja buscar.
 * @returns {Object|null} O objeto do produto correspondente se encontrado, ou null caso contrário.
 */
function buscarProduto(listaProdutos, nomeBusca) {
  // Requisito: Usar uma estrutura de repetição para percorrer a lista
  for (const produto of listaProdutos) {
    // Requisito: A comparação deve ser feita na propriedade 'nome' do objeto.
    if (produto.nome === nomeBusca) {
      // Requisito: Retornar o objeto completo do produto se encontrado.
      return produto;
    }
  }

  // Requisito: Se o produto não for encontrado, retornar null.
  return null;
}

// ------------------------------------
// EXEMPLO DE USO DO PROGRAMA
// ------------------------------------

// 1. Criação da lista de objetos (Requisito: Exemplo de uso com lista)
const inventario = [
  { nome: "Smartphone X", preco: 1500.00 },
  { nome: "Notebook Pro", preco: 4200.50 },
  { nome: "Mouse sem fio", preco: 75.90 },
  { nome: "Teclado Mecânico", preco: 350.00 }
];

// 2. Cenário de Sucesso: Produto Encontrado
const nomeParaBuscarSucesso = "Notebook Pro";
const produtoEncontrado = buscarProduto(inventario, nomeParaBuscarSucesso);

console.log(`\n--- Busca por: ${nomeParaBuscarSucesso} ---`);
if (produtoEncontrado) {
  console.log(`✅ Produto Encontrado: Nome: ${produtoEncontrado.nome}, Preço: R$${produtoEncontrado.preco.toFixed(2)}`);
} else {
  console.log("❌ Produto não encontrado.");
}


// 3. Cenário de Falha: Produto Não Encontrado
const nomeParaBuscarFalha = "Tablet S8";
const produtoNaoEncontrado = buscarProduto(inventario, nomeParaBuscarFalha);

console.log(`\n--- Busca por: ${nomeParaBuscarFalha} ---`);
if (produtoNaoEncontrado) {
  console.log(`✅ Produto Encontrado: Nome: ${produtoNaoEncontrado.nome}, Preço: R$${produtoNaoEncontrado.preco.toFixed(2)}`);
} else {
  console.log("❌ Produto não encontrado.");
}
