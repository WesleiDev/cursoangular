import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public usuario: any = {
    nome: 'Weslei',
    email: 'Weslei@hotmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    console.log("Usuário:",this.usuario);


  }

}
