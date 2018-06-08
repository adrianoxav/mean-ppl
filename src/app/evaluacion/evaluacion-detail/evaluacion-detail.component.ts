import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-evaluacion-detail',
  templateUrl: './evaluacion-detail.component.html',
  styleUrls: ['./evaluacion-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EvaluacionDetailComponent implements OnInit {

  cuestionario : any;
  pregunta:any;

  preguntas: any;
        evaluacion: any;

        constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

        ngOnInit() {
          this.getEvaluacionDetail(this.route.snapshot.params['id']);
          //console.log('id');


        }

        getEvaluacionDetail(id) {
          this.http.get('http://localhost:3000/evaluacion/'+id,httpOptions).subscribe(data => {
            this.evaluacion = data;
console.log(this.evaluacion);
                      this.http.get('http://localhost:3000/cuestionario/'+this.evaluacion.idCuestionario,httpOptions).subscribe(data => {
                        this.cuestionario = data;
                        console.log(data);
                        this.getPreguntas(this.cuestionario.preguntas);
                        console.log(this.cuestionario);

                      });
          });

        }

        deleteEvaluacion(id) {
          this.http.delete('http://localhost:3000/evaluacion/'+id,httpOptions)
            .subscribe(res => {
                this.router.navigate(['/evaluaciones']);
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

            this.http.get('http://localhost:3000/pregunta/'+i,httpOptions).subscribe(data => {
              i = data;
              console.log(data);
              preg.push(data.pregunta);
            });

          }
    console.log(preg);
    this.cuestionario.preguntas=preg;
        }
}
