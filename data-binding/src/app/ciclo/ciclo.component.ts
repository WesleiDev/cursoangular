import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit{

@Input("valorInicial")  public valorInicial:number = 10;

  constructor() { 
    this.log("Constuctor");
        
  }

  ngOnInit() {
    this.log("ngOnInit");
    
  }

  ngOnChanges(){
    this.log("ngOnChanges");
    
  }

  ngDoCheck(){
    this.log("ngDoCheck");
    
  }

  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");
    
  }

  ngOnDestroy(){
    this.log("ngDestroy");
    
  }

  private log(hook: String){
    console.log(hook);
    
  }

}
