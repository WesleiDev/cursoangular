import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  public livros: string[] = ['Java', 'Angular 2'];

  public filtro:string;

  public livro: any = {
    titulo:"java script developers",
    rating: 4.5321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: "http:/a.co/glqjpRP"  
  };

  public valorAsync = new Promise((resolve, reject)=>{
    setTimeout(() =>  resolve('Valor assíncrono'), 2000);
  });

  public valorAsync2 = Observable.interval(2000)
  .map(valor =>'Valor assincrono 2');



  constructor() { }

  ngOnInit() {
  }

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
    
  }

  obterCursos(){

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter( (v)=> {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
          return true;
        }
        return false;
      }
    )

  }

  

}
