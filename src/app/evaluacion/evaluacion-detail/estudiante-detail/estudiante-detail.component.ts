import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EstudianteDetailComponent implements OnInit {

  cuestionario : any;
  pregunta:any;
  evaluacionestudiantes:any;
  preguntas: any;
        evaluacion: any;

        constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

        ngOnInit() {
          this.getEvaluacionDetail(this.route.snapshot.params['id']);
          //console.log('id');


        }

        getEvaluacionDetail(id) {
          this.http.get('http://localhost:443/evaluacion_estudiante/getdetail/'+id,httpOptions).subscribe(data => {
            this.evaluacion = data;
console.log(this.evaluacion);
                  /*    this.http.get('http://localhost:443/cuestionario/'+this.evaluacion.idCuestionario,httpOptions).subscribe(data => {
                        this.cuestionario = data;
                        console.log(data);
                        console.log(this.cuestionario);

                      });

                      this.http.get('http://localhost:443/evaluacion_estudiante/poreval/'+this.evaluacion._id,httpOptions).subscribe(data => {
                        this.evaluacionestudiantes = data;
                        console.log(this.evaluacionestudiantes);

                      });*/
          });

        }

        deleteEvaluacion(id) {
          this.http.delete('http://localhost:443/evaluacion/'+id,httpOptions)
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
            let dat:any;
            this.http.get('http://localhost:443/pregunta/'+i,httpOptions).subscribe(data => {
              i = data;
              dat=data;
              console.log(data);
              preg.push(dat.pregunta);
            });

          }
    console.log(preg);
    this.cuestionario.preguntas=preg;
        }
}
