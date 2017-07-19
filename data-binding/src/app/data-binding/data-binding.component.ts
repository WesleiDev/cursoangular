import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight{
    background-color: yellow;
    font-weight: bold;
    }

   `
  ]
})
export class DataBindingComponent implements OnInit {

  public url: string = "http://loiane.com";
  public cursoAngular: boolean = true;
  public urlImagem: string = "http://lorempixel.com/400/200/nature/";
  public valorAtual: string;
  public valorSalvo: string;
  public isMouseOver: boolean = false;
  public nome:string = "abc";
  public name:string = "name";
  public valorInicial:number = 15;

  public nomeDoCruso:string = "Angular";

  public pessoa:any = {
    nome:"Weslei",
    idade:21
  }

  constructor() { }

  ngOnInit() {
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  getValor() {
    return 1;
  }

  getCurtitCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
