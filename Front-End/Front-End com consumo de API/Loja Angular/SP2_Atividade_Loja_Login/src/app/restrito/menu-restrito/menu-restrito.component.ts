import { Component } from '@angular/core'; // Importa o módulo Component de '@angular/core'
import { Router } from '@angular/router'; // Importa o módulo Router de '@angular/router'
import { LoginService } from 'src/app/login.service'; // Importa o serviço LoginService

@Component({
  selector: 'app-menu-restrito', // Define o seletor do componente
  templateUrl: './menu-restrito.component.html', // Define o template HTML do componente
  styleUrls: ['./menu-restrito.component.css'] // Define os estilos CSS do componente
})
export class MenuRestritoComponent {

  constructor( private _router: Router, private _loginService: LoginService) { } // Injeta os serviços Router e LoginService no construtor

  logout() { // Método para logout do usuário
    localStorage.clear(); // Limpa o armazenamento local, removendo o token de autenticação
    this._loginService.setMostraMenu(true); // Define a exibição do menu como verdadeira
    this._router.navigate(['/login']); // Navega para a página de login
  }
}
