import { Injectable } from '@angular/core'; // Importa o módulo Injectable de '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'; // Importa os módulos CanActivate, Router, ActivatedRouteSnapshot e RouterStateSnapshot de '@angular/router'
import { Observable } from 'rxjs'; // Importa o módulo Observable de 'rxjs'

@Injectable({
  providedIn: 'root' // Define que este serviço será provido em nível de raiz
})
export class GuardGuard implements CanActivate { // Implementa a interface CanActivate

  constructor(private _router: Router){} // Injeta o serviço Router no construtor

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('token') !== null){ // Verifica se existe um token no armazenamento local
        return true; // Permite a ativação da rota se o token existir
      }
    
      this._router.navigate(['login']); // Redireciona para a página de login se não houver um token
      return false; // Impede a ativação da rota
  }
  
}
