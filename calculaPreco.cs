class Produto:
    # O construtor (__init__) inicializa as propriedades do objeto
    def __init__(self, nome, preco, desconto):
        self.nome = nome
        self.preco = preco
        self.desconto = desconto

    # O método calcular_preco_final faz o cálculo
    def calcular_preco_final(self):
        # A lógica é a mesma: preco - (preco * desconto / 100)
        return self.preco - (self.preco * self.desconto / 100)

# Bloco principal de execução (onde o programa começa)
if __name__ == "__main__":
    # Cria a instância do produto (desconto de 25)
    produto = Produto("Fone de ouvido", 200, 25)

    # Imprime o Preço inicial formatado com 2 casas decimais
    print(f"Preço inicial de {produto.nome}: R$ {produto.preco:.2f}")

    # Imprime o Preço final, chamando o método de cálculo
    preco_final_calculado = produto.calcular_preco_final()
    print(f"Preço final de {produto.nome}: R$ {preco_final_calculado:.2f}")
