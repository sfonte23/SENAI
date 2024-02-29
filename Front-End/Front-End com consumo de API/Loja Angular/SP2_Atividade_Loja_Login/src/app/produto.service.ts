import { Injectable } from '@angular/core'; // Importa o módulo Injectable de '@angular/core'
import { HttpClient } from '@angular/common/http'; // Importa o módulo HttpClient de '@angular/common/http' para fazer solicitações HTTP
import { Observable } from 'rxjs'; // Importa o módulo Observable de 'rxjs' para trabalhar com assinaturas assíncronas
import { Produto } from './models/Produto.model'; // Importa o modelo de Produto

@Injectable({
  providedIn: 'root' // Define que este serviço será provido em nível de raiz
})

export class ProdutoService {

  private url = "http://localhost:3000/produtos"; // URL da API para os recursos de produtos

  constructor(private _httpClient: HttpClient) { } // Injeta o serviço HttpClient no construtor

  // Método para obter um produto por ID
  getProduto(id: any): Observable<Produto> {
    const urlAtualizar = `${this.url}?id=${id}`; // Monta a URL para obter o produto com o ID especificado
    return this._httpClient.get<Produto>(urlAtualizar); // Faz uma solicitação HTTP GET para obter o produto
  }

  // Método para obter todos os produtos
  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url); // Faz uma solicitação HTTP GET para obter todos os produtos
  }

  // Método para cadastrar um novo produto
  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this._httpClient.post<Produto[]>(this.url, produto); // Faz uma solicitação HTTP POST para cadastrar o novo produto
  }

  // Método para atualizar um produto existente
  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/${id}`; // Monta a URL para atualizar o produto com o ID especificado
    return this._httpClient.put<Produto[]>(urlAtualizar, produto); // Faz uma solicitação HTTP PUT para atualizar o produto
  }

  // Método para remover um produto
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/${id}`; // Monta a URL para remover o produto com o ID especificado
    return this._httpClient.delete<Produto[]>(urlDeletar); // Faz uma solicitação HTTP DELETE para remover o produto
  }
}
