import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, //Pegamos as informações da rota
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean{
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  	canLoad(route: Router): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: Verificando se o usuário pode carregar o código do módulo');

      return this.verificarAcesso();
    }

}
