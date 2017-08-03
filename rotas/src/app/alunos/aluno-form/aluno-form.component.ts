import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { IFormCandeactivate } from './../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCandeactivate {

  public aluno: any;
  private inscricao: Subscription
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    //console.log(this.formMudou);

  }

  podeMudarRota() {


    return true;

  }
  podeDesativar() {
    if (this.formMudou) {
      return (confirm('Tem ceterza que deseja sair desta página?'))

    }
    return true;
  }

}
