import { Component, OnInit } from '@angular/core'; // Importa o Component e OnInit de @angular/core
import { Produto } from '../models/Produto.model'; // Importa o modelo Produto
import { ProdutoService } from '../produto.service'; // Importa o serviço ProdutoService

@Component({
  selector: 'app-inicio', // Define o seletor do componente
  templateUrl: './inicio.component.html', // Define o template HTML do componente
  styleUrls: ['./inicio.component.css'] // Define o estilo CSS do componente
})
export class InicioComponent implements OnInit { // Define a classe do componente e implementa a interface OnInit

  public produtos: Produto[] = []; // Declara uma variável pública para armazenar a lista de produtos

  constructor(private _produtoService: ProdutoService) {} // Define o construtor do componente e injeta o serviço ProdutoService

  ngOnInit(): void { // Implementação do método OnInit
    this.listarProdutos(); // Chama o método listarProdutos ao inicializar o componente
  }

  listarProdutos(): void { // Define um método para listar os produtos
    this._produtoService.getProdutos().subscribe( // Chama o método getProdutos do serviço e se inscreve para receber os dados
      retornaProduto => { // Callback para lidar com os dados retornados
        this.produtos = retornaProduto.map( // Mapeia os dados retornados para objetos da classe Produto
          item => {
            return new Produto( // Cria um novo objeto Produto com os dados retornados
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        );
      }
    );
  }
}
