import { Component } from '@angular/core'; // Importa o Component de '@angular/core' para definir um novo componente
import { Router } from '@angular/router'; // Importa o Router de '@angular/router' para navegar entre as rotas da aplicação

@Component({
  selector: 'app-menu', // Define o seletor do componente
  templateUrl: './menu.component.html', // Define o template HTML do componente
  styleUrls: ['./menu.component.css'] // Define o estilo CSS do componente
})
export class MenuComponent {
    // Esta classe não contém nenhuma lógica específica
    // Aqui você normalmente definiria propriedades e métodos que serão utilizados no template HTML
    // Por exemplo, você poderia definir propriedades para armazenar informações do usuário ou métodos para manipular eventos de cliques
}
