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

--------------------------------------------------------------------------------------------------------------------

  # Define função para calcular preço final
def calcular_preco_final(preco, desconto=0):
    """Calcula o preço após aplicar um desconto em porcentagem."""
    preco_final = preco - (preco * desconto / 100)
    return preco_final

# Exemplo de uso
nome_produto = "Fone de ouvido"
preco_inicial = 200
desconto_aplicado = 25 # ALTERADO de 15 para 25

# Calcula o preço final
preco_final_calculado = calcular_preco_final(preco_inicial, desconto_aplicado)

# -------------------------------------------------------------
# IMPRESSÃO NO CONSOLE (Seguindo o formato solicitado)
# -------------------------------------------------------------

# Linha adicionada para imprimir o "Preço inicial" com 2 casas decimais.
print(f"Preço inicial de {nome_produto}: R$ {preco_inicial:.2f}")

# Linha para imprimir o "Preço final" com 2 casas decimais.
# O cálculo é feito fora da função 'print', resultando na saída esperada: R$ 150.00
print(f"Preço final de {nome_produto}: R$ {preco_final_calculado:.2f}")
