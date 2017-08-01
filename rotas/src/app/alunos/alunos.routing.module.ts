import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

/**
 Abaixo é um exemplo de rotas filhas.
 Em rotas filhas, sempre renderizamos o componente pai, que neste caso é AlunosComponent
 junto renderizamos o componente da rota Filha
*/
const alunosRoutes: Routes = [
  { path: '', component : AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent },
    { path: ':id', component : AlunoDetalheComponent },
    { path: ':id/editar', component : AlunoFormComponent },
  ] },


]

@NgModule({
  imports: [
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [RouterModule]
})
export class AlunosRoutingModule{

}
