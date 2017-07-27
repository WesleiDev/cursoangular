import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: any[];
  public pagina: number;
  public inscricao: Subscription;

  constructor(private cusrsosService: CursosService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.cursos = this.cusrsosService.getCursos();

    //pegando parâmetros do queryParams
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}})
  }

}
