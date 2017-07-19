import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService{
    public emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ["Angular2", "Android", "PHP"];

    constructor(private logService: LogService){
        console.log("CursosService");
        
    }

    getCursos(){

        this.logService.consoleLog("Obtendo lista de cursos");
        return this.cursos ;
        
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo curso ${curso} `);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
        

}