import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() public valor: number = 0;
  @Output() public mudouValor = new EventEmitter();
  
  @ViewChild('campoInput') public campoValorInput: ElementRef;

  constructor() { }



  ngOnInit() {
  }

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
    console.log(this.campoValorInput.nativeElement.value);
    
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
