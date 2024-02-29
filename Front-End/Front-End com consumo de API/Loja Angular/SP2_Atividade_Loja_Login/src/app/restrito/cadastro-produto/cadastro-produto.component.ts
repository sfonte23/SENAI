import { Component } from '@angular/core'; // Importa o módulo Component de '@angular/core'
import { Router } from '@angular/router'; // Importa o módulo Router de '@angular/router'
import { Produto } from 'src/app/models/Produto.model'; // Importa o modelo de Produto
import { ProdutoService } from 'src/app/produto.service'; // Importa o serviço ProdutoService

@Component({
  selector: 'app-cadastro-produto', // Define o seletor do componente
  templateUrl: './cadastro-produto.component.html', // Define o template HTML do componente
  styleUrls: ['./cadastro-produto.component.css'] // Define os estilos CSS do componente
})
export class CadastroProdutoComponent {

  public produto: Produto = new Produto(0,"","","",0); // Objeto para armazenar os dados do produto a ser cadastrado

  constructor(private _produtoService: ProdutoService, private _router: Router) {} // Injeta os serviços ProdutoService e Router no construtor

  cadastrar(): void { // Método para cadastrar um produto
    this._produtoService.cadastrarProduto(this.produto).subscribe( // Chama o método do serviço ProdutoService para cadastrar o produto
      produto => {
        this.produto = new Produto(0,"","","",0); // Limpa o objeto produto após o cadastro
        alert("Cadastro Efetuado com sucesso"); // Exibe um alerta indicando que o cadastro foi realizado com sucesso
      },
      err => {
        alert("Erro ao Cadastrar"); // Exibe um alerta em caso de erro ao cadastrar o produto
      }
    );

    this._router.navigate(["restrito/lista"]); // Navega de volta para a página de lista de produtos após o cadastro
  }
}
