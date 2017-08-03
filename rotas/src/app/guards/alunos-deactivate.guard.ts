import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot,RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { IFormCandeactivate } from './iform-candeactivate';



@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate> {
    canDeactivate(
      component: IFormCandeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      console.log("Guarda de desativação.");

      return component.podeDesativar();
  }
}

class AppModule {}
