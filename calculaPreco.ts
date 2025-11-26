# Define uma "interface" (usamos classes ou dicionários em Python)
# Aqui, usamos um dicionário para representar um produto
# Campos esperados: nome (str), preco (float/int), desconto (opcional, float/int)

def calcular_preco_final(produto: dict) -> float:
  """
  Função para calcular o preço final com desconto.
  O desconto é dado em porcentagem.
  """
  # Usa 0 se não houver 'desconto' na dictionary (similar ao ?? em JS)
  desconto_percentual = produto.get('desconto', 0) 
  
  # Acessa o preço do produto
  preco = produto['preco']
  
  # Calcula o preço final (preco - valor_do_desconto)
  return preco - (preco * desconto_percentual / 100)

# Exemplo de uso
produto1 = {
  "nome": "Fone de ouvido",
  "preco": 200,
  "desconto": 25 # Alterado de 15 para 25
}

# Linha adicionada para imprimir o Preço inicial
# Usamos f-strings e formatamos com 2 casas decimais
print(f"Preço inicial de {produto1['nome']}: R$ {produto1['preco']:.2f}")

# Linha para imprimir o Preço final
print(f"Preço final de {produto1['nome']}: R$ {calcular_preco_final(produto1):.2f}")
