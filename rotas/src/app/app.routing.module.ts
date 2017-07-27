import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

//Declarando quais são as minhas rotas e quais serão seus respectivos componentes que serão rederezados em cada rota
const appRoutes: Routes = [
    //{ path: 'cursos', component: CursosComponent },
   // { path:'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent  },
   // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}
