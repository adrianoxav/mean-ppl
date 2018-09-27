import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-evaluacion-estudiante-detail',
  templateUrl: './evaluacion-estudiante-detail.component.html',
  styleUrls: ['./evaluacion-estudiante-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EvaluacionEstudianteDetailComponent implements OnInit {


          evaluacion_estudiante = {};

          constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

          ngOnInit() {
            this.getEvaluacion_estudianteDetail(this.route.snapshot.params['id']);
            console.log('id');
          }

          getEvaluacion_estudianteDetail(id) {
            this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion_estudiante/'+id,httpOptions).subscribe(data => {
              this.evaluacion_estudiante = data;
            });
          }

          deleteEvaluacion_estudiante(id) {
            this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion_estudiante/'+id,httpOptions)
              .subscribe(res => {
                  this.router.navigate(['/evaluacion_estudiantes']);
                }, (err) => {
                  console.log(err);
                }
              );
          }

}
