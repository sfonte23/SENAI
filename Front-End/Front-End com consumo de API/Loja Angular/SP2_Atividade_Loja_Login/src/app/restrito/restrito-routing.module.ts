import { NgModule } from '@angular/core'; // Importa o módulo NgModule de '@angular/core'
import { RouterModule, Routes } from '@angular/router'; // Importa o módulo RouterModule e Routes de '@angular/router'
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component'; // Importa o componente CadastroProdutoComponent
import { ListaProdutoComponent } from './lista-produto/lista-produto.component'; // Importa o componente ListaProdutoComponent
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component'; // Importa o componente AtualizaProdutoComponent
import { RestritoComponent } from './restrito.component'; // Importa o componente RestritoComponent
import { GuardGuard } from '../guard.guard'; // Importa o serviço GuardGuard para proteção de rotas

const restritoRoutes: Routes = [ // Define as rotas restritas do módulo
    {
        path: 'restrito', component: RestritoComponent, children: [ // Rota principal restrita com componentes filhos
            { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard] }, // Rota para o componente CadastroProdutoComponent com guarda de rota
            { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard] }, // Rota para o componente ListaProdutoComponent com guarda de rota
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard] } // Rota para o componente AtualizaProdutoComponent com guarda de rota
        ]
    },
    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' } // Rota padrão redirecionando para '/restrito/lista'
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)], // Importa as rotas restritas como rotas secundárias
    exports: [RouterModule] // Exporta o módulo de roteamento para uso em outros módulos
})
export class RestritoRoutingModule {
}
