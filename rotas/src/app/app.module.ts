import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    //CursosComponent,
    HomeComponent,
    LoginComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    //routing
    AppRoutingModule,
    CursosModule
  ],
  providers: [
    //CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
