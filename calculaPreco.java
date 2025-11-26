# Classe Produto em Python (similar à classe Java)
class Produto:
    # Método construtor para inicializar o objeto
    def __init__(self, nome, preco, desconto):
        self.nome = nome
        self.preco = preco
        self.desconto = desconto

    # Método para calcular o preço final
    def calcular_preco_final(self):
        # Calcula o preço final (desconto é em porcentagem)
        return self.preco - (self.preco * self.desconto / 100)

# Bloco principal de execução (similar ao main em Java)
if __name__ == "__main__":
    # Cria a instância do produto com desconto de 25
    produto = Produto("Fone de ouvido", 200, 25)

    # Imprime o Preço inicial com formatação de 2 casas decimais
    print(f"Preço inicial de {produto.nome}: R$ {produto.preco:.2f}")

    # Imprime o Preço final
    preco_final_calculado = produto.calcular_preco_final()
    print(f"Preço final de {produto.nome}: R$ {preco_final_calculado:.2f}")
