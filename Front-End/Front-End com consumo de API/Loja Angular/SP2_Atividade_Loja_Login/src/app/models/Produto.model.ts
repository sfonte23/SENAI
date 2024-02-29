export class Produto {
    // Propriedades da classe Produto
    id: number = 0; // ID do produto, inicializado como 0
    produto: string = ""; // Nome do produto, inicializado como uma string vazia
    descricao: string = ""; // Descrição do produto, inicializada como uma string vazia
    foto: string = ""; // URL da foto do produto, inicializada como uma string vazia
    preco: number = 0; // Preço do produto, inicializado como 0

    // Construtor da classe Produto
    constructor(id: number, produto: string, descricao: string, foto: string, preco: number) {
        // Atribui os parâmetros passados para as propriedades da classe
        this.id = id; // Define o ID do produto
        this.produto = produto; // Define o nome do produto
        this.descricao = descricao; // Define a descrição do produto
        this.foto = foto; // Define a URL da foto do produto
        this.preco = preco; // Define o preço do produto
    }
}
