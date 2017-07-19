import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  public cursos: string[] =  ['Angular 2'];
  public mostrarCursos: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
