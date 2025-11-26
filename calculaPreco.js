# Define a função para calcular o preço final
def calcular_preco_final(produto: dict):
    # Usa 0 se 'desconto' não estiver presente no dicionário (similar ao ?? em JS)
    desconto = produto.get('desconto', 0)
    preco = produto['preco']
    
    # O desconto é tratado como porcentagem (dividido por 100).
    preco_final = preco - (preco * desconto / 100)
    
    # Imprime o Preço final, formatado com 2 casas decimais.
    print(f"Preço final de {produto['nome']}: R$ {preco_final:.2f}")

# Exemplo de uso (usando um dicionário para representar o produto)
produto1 = {
    "nome": "Fone de ouvido",
    "preco": 200,
    "desconto": 25 # Valor alterado para 25
}

# Imprime o Preço inicial (adicionado anteriormente)
print(f"Preço inicial de {produto1['nome']}: R$ {produto1['preco']:.2f}")

# Chama a função
calcular_preco_final(produto1)
