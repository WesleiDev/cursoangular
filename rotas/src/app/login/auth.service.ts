import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './Usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: Boolean = false;
  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome ==='usuario@email.com' &&
      usuario.senha === '123456'){
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
