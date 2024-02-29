import { NgModule } from '@angular/core'; // Importa o módulo NgModule de '@angular/core'
import { BrowserModule } from '@angular/platform-browser'; // Importa o módulo BrowserModule de '@angular/platform-browser' para suporte a aplicativos da web
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa os módulos FormsModule e ReactiveFormsModule para suporte a formulários
import { HttpClientModule } from '@angular/common/http'; // Importa o módulo HttpClientModule para suporte a comunicação HTTP

/* Importações Angular Material */
import { MatButtonModule } from '@angular/material/button'; // Importa o módulo MatButtonModule de '@angular/material/button' para botões
import { MatCardModule } from '@angular/material/card'; // Importa o módulo MatCardModule de '@angular/material/card' para cartões
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa o módulo MatFormFieldModule de '@angular/material/form-field' para campos de formulário
import { MatGridListModule } from '@angular/material/grid-list'; // Importa o módulo MatGridListModule de '@angular/material/grid-list' para layout em grade
import { MatIconModule } from '@angular/material/icon'; // Importa o módulo MatIconModule de '@angular/material/icon' para ícones
import { MatInputModule } from '@angular/material/input'; // Importa o módulo MatInputModule de '@angular/material/input' para campos de entrada
import { MatMenuModule } from '@angular/material/menu'; // Importa o módulo MatMenuModule de '@angular/material/menu' para menus
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa o módulo MatToolbarModule de '@angular/material/toolbar' para barras de ferramentas

import { AppRoutingModule } from './app-routing.module'; // Importa o módulo de roteamento da aplicação
import { RestritoRoutingModule } from './restrito/restrito-routing.module'; // Importa o módulo de roteamento restrito
import { AppComponent } from './app.component'; // Importa o componente principal da aplicação
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa o módulo BrowserAnimationsModule de '@angular/platform-browser/animations' para animações

import { InicioComponent } from './inicio/inicio.component'; // Importa o componente InicioComponent
import { LoginComponent } from './login/login.component'; // Importa o componente LoginComponent
import { MenuComponent } from './menu/menu.component'; // Importa o componente MenuComponent
import { RodapeComponent } from './rodape/rodape.component'; // Importa o componente RodapeComponent
import { RestritoComponent } from './restrito/restrito.component'; // Importa o componente RestritoComponent
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component'; // Importa o componente AtualizaProdutoComponent
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component'; // Importa o componente CadastroProdutoComponent
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component'; // Importa o componente ListaProdutoComponent
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component'; // Importa o componente MenuRestritoComponent

@NgModule({
  declarations: [
    // Declaração de todos os componentes utilizados na aplicação
    AppComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
    RodapeComponent,
    RestritoComponent,
    AtualizaProdutoComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent,
    MenuRestritoComponent
  ],
  imports: [
    // Importação dos módulos utilizados na aplicação
    BrowserModule, // BrowserModule para suporte a aplicativos da web
    AppRoutingModule, // Módulo de roteamento da aplicação
    BrowserAnimationsModule, // BrowserAnimationsModule para animações
    MatButtonModule, // Módulo de botões
    MatCardModule, // Módulo de cartões
    MatFormFieldModule, // Módulo de campos de formulário
    MatGridListModule, // Módulo de layout em grade
    MatIconModule, // Módulo de ícones
    MatInputModule, // Módulo de campos de entrada
    MatMenuModule, // Módulo de menus
    MatToolbarModule, // Módulo de barras de ferramentas
    FormsModule, // FormsModule para suporte a formulários de modelo
    ReactiveFormsModule, // ReactiveFormsModule para suporte a formulários reativos
    HttpClientModule, // HttpClientModule para suporte a comunicação HTTP
    RestritoRoutingModule // Módulo de roteamento restrito
  ],
  providers: [], // Provedores de serviços da aplicação
  bootstrap: [AppComponent] // Componente raiz da aplicação
})
export class AppModule { } // Definição do módulo AppModule como o módulo principal da aplicação
