import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mostrarMenu: boolean = false;

  title = 'app';

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      (data: any)=>{
        this.mostrarMenu = data
      }
    );
  }

}
