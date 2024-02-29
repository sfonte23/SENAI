import { NgModule } from '@angular/core'; // Importa o módulo NgModule de '@angular/core'
import { RouterModule, Routes } from '@angular/router'; // Importa o módulo RouterModule e Routes de '@angular/router'
import { InicioComponent } from './inicio/inicio.component'; // Importa o componente InicioComponent
import { LoginComponent } from './login/login.component'; // Importa o componente LoginComponent
import { RestritoComponent } from './restrito/restrito.component'; // Importa o componente RestritoComponent
import { GuardGuard } from './guard.guard'; // Importa o serviço GuardGuard para proteção de rotas

const routes: Routes = [ // Define as rotas da aplicação
  { path: 'inicio', component: InicioComponent }, // Rota para o componente InicioComponent
  { path: 'login', component: LoginComponent }, // Rota para o componente LoginComponent
  { path: 'restrito', component: RestritoComponent, canActivate: [GuardGuard] }, // Rota para o componente RestritoComponent com guarda de rota
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Rota padrão redirecionando para '/inicio'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa as rotas para o módulo raiz
  exports: [RouterModule] // Exporta o módulo de roteamento para uso em outros módulos
})
export class AppRoutingModule { } // Define a classe AppRoutingModule como um módulo Angular
