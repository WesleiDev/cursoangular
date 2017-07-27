import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
//import { RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    imports:[
      CommonModule,
      CursosRoutingModule
       //RouterModule
    ],
    declarations:[
      CursosComponent,
      CursoDetalheComponent,
      CursoNaoEncontradoComponent,
    ],
    providers:[CursosService]
  })

export class CursosModule{}
