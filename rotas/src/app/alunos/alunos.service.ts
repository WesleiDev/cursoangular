import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: "Alunos01", email: "aluno01@email.com" },
    { id: 2, nome: "Alunos02", email: "aluno02@email.com" },
    { id: 3, nome: "Alunos03", email: "aluno03@email.com" },
    { id: 4, nome: "Alunos04", email: "aluno04@email.com" },
  ]
  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }

    return null;

  }

}
