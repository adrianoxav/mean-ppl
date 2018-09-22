import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario-detail',
  templateUrl: './cuestionario-detail.component.html',
  styleUrls: ['./cuestionario-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CuestionarioDetailComponent implements OnInit {


    cuestionario :any;
    pregunta:any;

    preguntas:any;
    preg= [];

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.getCuestionarioDetail(this.route.snapshot.params['id']);



    }

    getCuestionarioDetail(id) {
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/cuestionario/'+id,httpOptions).subscribe(data => {
        this.cuestionario = data;
        console.log(data);
        this.getPreguntas(this.cuestionario.preguntas);
        console.log(this.cuestionario);

      });
  //    this.getPreguntas(this.cuestionario.preguntas);

    }

    deleteCuestionario(id) {
      this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/cuestionario/'+id,httpOptions)
        .subscribe(res => {
            this.router.navigate(['/cuestionarios']);
          }, (err) => {
            console.log(err);
          }
        );
    }
    getPreguntas(preguntas){
      var i:any;
      let preg=[];
      for (i of preguntas){
        console.log(i);

        this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/pregunta/'+i, httpOptions).subscribe(data => {
          i = data;
          console.log(data);

          this.preg.push(data);
        });

      }
console.log(this.preg);
this.cuestionario.preguntas=preg;
    }
}
