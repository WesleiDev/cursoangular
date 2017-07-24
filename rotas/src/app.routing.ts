import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CursosComponent } from './app/cursos/cursos.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { CursoDetalheComponent } from './app/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './app/curso-nao-encontrado/curso-nao-encontrado.component';

//Declarando quais são as minhas rotas e quais serão seus respectivos componentes que serão rederezados em cada rota
const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path:'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent  },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);