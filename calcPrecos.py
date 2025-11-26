# ... (Código que cria e preenche o DataFrame df) ...

# Define uma função para calcular o preço final
def calcular_preco_final(row):
    return row['preco'] - (row['preco'] * row['desconto'] / 100) # Linha corrigida

# Aplica a função a cada linha e cria uma nova coluna
df['preco_final'] = df.apply(calcular_preco_final, axis=1)

# ... (Código que exibe o DataFrame) ...
