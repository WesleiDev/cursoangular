import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
       console.log(route);
       console.log(state);
       console.log("URL:", state.url);


       if(state.url.includes('editar')){
         alert('Usuário sem permissão para editar');
         return false;
       }


        return true;
      }

}
