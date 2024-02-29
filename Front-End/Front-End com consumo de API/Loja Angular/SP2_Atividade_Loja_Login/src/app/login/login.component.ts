import { Component } from '@angular/core'; // Importa o Component de @angular/core
import { LoginService } from '../login.service'; // Importa o serviço LoginService
import { Router } from '@angular/router'; // Importa o Router de @angular/router

@Component({
  selector: 'app-login', // Define o seletor do componente
  templateUrl: './login.component.html', // Define o template HTML do componente
  styleUrls: ['./login.component.css'] // Define o estilo CSS do componente
})
export class LoginComponent {

  usuario!: string; // Declara uma variável para armazenar o nome de usuário
  senha!: string; // Declara uma variável para armazenar a senha

  constructor(private _loginService: LoginService, private _router: Router) {} // Define o construtor do componente e injeta o serviço LoginService e o Router

  fazerLogin() { // Define um método para fazer login
    this._loginService.login(this.usuario, this.senha); // Chama o método de login do serviço LoginService com o nome de usuário e senha fornecidos
    this._router.navigate(['/restrito/lista']); // Navega para a rota '/restrito/lista' após o login
    this._loginService.setMostraMenu(false); // Define a visibilidade do menu como falso após o login
  }
}
