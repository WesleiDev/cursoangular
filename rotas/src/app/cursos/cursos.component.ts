import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: any[];

  constructor(private cusrsosService: CursosService) { }

  ngOnInit() {

    this.cursos = this.cusrsosService.getCursos();
  }

}
