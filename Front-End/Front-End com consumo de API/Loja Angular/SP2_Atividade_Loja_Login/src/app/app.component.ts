import { Component, OnDestroy, OnInit } from '@angular/core'; // Importa os módulos Component, OnDestroy e OnInit de '@angular/core'
import { LoginService } from './login.service'; // Importa o serviço LoginService

@Component({
  selector: 'app-root', // Define o seletor do componente
  templateUrl: './app.component.html', // Define o template HTML do componente
  styleUrls: ['./app.component.css'] // Define o estilo CSS do componente
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'BR Games'; // Título da aplicação
  mostrarMenu: boolean = true; // Variável para controlar a exibição do menu

  constructor(private _loginService: LoginService) {} // Injeta o serviço LoginService no construtor

  ngOnInit(): void {
    // Método executado quando o componente é inicializado
    this._loginService.getMostraMenu().subscribe(
      res => { this.mostrarMenu = res; } // Assina o Observable para receber atualizações sobre a exibição do menu
    );
  }

  ngOnDestroy() {
    // Método executado quando o componente é destruído
    localStorage.clear(); // Limpa o armazenamento local ao destruir o componente (pode ser ajustado conforme necessário)
  }
}
