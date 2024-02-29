import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit{

  public produtoId: number = 0; // ID do produto a ser atualizado
  public produto: Produto = new Produto(0,"","","",0); // Objeto do tipo Produto para armazenar os dados do produto

  constructor(private _produtoService:ProdutoService, private _router: Router,
    private _activatedRoute:ActivatedRoute){
      // Obtém o ID do produto da rota
      this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
    }

  ngOnInit(): void {
    // Ao inicializar o componente, lista o produto a ser atualizado
    this.listarProduto();
  }

  listarProduto():void{
    // Método para obter os dados do produto a partir do serviço
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        // Ao receber a resposta, preenche o objeto produto com os dados obtidos
        this.produto = new Produto(
          res[0].id,
          res[0].produto,
          res[0].descricao,
          res[0].foto,
          res[0].preco
        );
      }
    )
  }

  atualizar(id: number){
    // Método para atualizar o produto
    this._produtoService.atualizarProduto(id,this.produto).subscribe(
      produto => {this.produto = new Produto(0,"","","",0)}, // Limpa o objeto produto após a atualização
      err => {alert("Erro ao atualizar")} // Exibe um alerta em caso de erro
    );

    // Após atualizar o produto, redireciona para a lista de produtos
    this._router.navigate(["restrito/lista"]);
  }
}
