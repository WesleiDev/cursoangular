import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

 public aluno: any;
  private inscricao: Subscription

  constructor(private route: ActivatedRoute,
              private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
        if(this.aluno === null){
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
