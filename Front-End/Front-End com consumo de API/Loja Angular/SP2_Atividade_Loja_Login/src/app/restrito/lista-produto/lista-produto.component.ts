import { Component, OnInit } from '@angular/core'; // Importa o módulo Component e OnInit de '@angular/core'
import { Router } from '@angular/router'; // Importa o módulo Router de '@angular/router'
import { LoginService } from 'src/app/login.service'; // Importa o serviço LoginService
import { Produto } from 'src/app/models/Produto.model'; // Importa o modelo de Produto
import { ProdutoService } from 'src/app/produto.service'; // Importa o serviço ProdutoService

@Component({
  selector: 'app-lista-produto', // Define o seletor do componente
  templateUrl: './lista-produto.component.html', // Define o template HTML do componente
  styleUrls: ['./lista-produto.component.css'] // Define os estilos CSS do componente
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[] = []; // Array para armazenar os produtos

  constructor(private _produtoService: ProdutoService, private _router: Router,
    private _loginService: LoginService) { } // Injeta os serviços ProdutoService, Router e LoginService no construtor

  ngOnInit(): void {
    this.listarProdutos(); // Chama o método para listar os produtos ao inicializar o componente
    this._loginService.setMostraMenu(false); // Define a exibição do menu como falso ao inicializar o componente
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe( // Obtém a lista de produtos do serviço ProdutoService
      retornaProduto => {
        this.produtos = retornaProduto.map( // Mapeia os produtos retornados para o formato do modelo de Produto
          item => {
            return new Produto( // Cria novos objetos Produto
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

  excluir(id: number) { // Método para excluir um produto
    this._produtoService.removerProduto(id).subscribe( // Chama o método do serviço ProdutoService para remover o produto
      produto => {
        this.listarProdutos(); // Atualiza a lista de produtos após a exclusão
      },
      err => { alert("Erro ao Excluir"); } // Exibe um alerta em caso de erro ao excluir o produto
    );
    this._router.navigate(["/restrito/lista"]); // Navega de volta para a página de lista de produtos
  }

}
