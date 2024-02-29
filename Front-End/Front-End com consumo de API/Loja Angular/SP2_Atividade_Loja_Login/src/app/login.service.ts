import { Injectable } from '@angular/core'; // Importa o módulo Injectable de '@angular/core'
import { Subject } from 'rxjs'; // Importa o módulo Subject de 'rxjs'

@Injectable({
  providedIn: 'root' // Define que este serviço será provido em nível de raiz
})
export class LoginService {

  mostraMenu = new Subject<boolean>(); // Cria um objeto Subject para controlar a exibição do menu

  constructor() { } // Construtor padrão do serviço

  // Método para efetuar login
  login(usuario: string, senha: string): void {
    if (usuario == "aluno" && senha == "1234") { // Verifica se o usuário e a senha estão corretos
      localStorage.setItem('token', 'qwer1234'); // Define um token no armazenamento local para indicar que o usuário está autenticado
      this.mostraMenu.next(false); // Emite um valor false para indicar que o menu não deve ser mostrado
    } else {
      this.mostraMenu.next(true); // Emite um valor true para indicar que o menu deve ser mostrado
      window.location.reload(); // Recarrega a página para limpar quaisquer dados antigos do usuário
    }
  }

  // Método para definir a exibição do menu
  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor); // Emite um valor para indicar se o menu deve ser mostrado ou não
  }

  // Método para obter a exibição do menu como um Observable
  getMostraMenu() {
    return this.mostraMenu.asObservable(); // Retorna o objeto Subject como um Observable para que os componentes possam se inscrever para receber atualizações
  }

}
