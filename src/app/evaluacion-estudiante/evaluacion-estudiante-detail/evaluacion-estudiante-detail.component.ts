import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
            this.http.get('http://localhost:3000/evaluacion_estudiante/'+id).subscribe(data => {
              this.evaluacion_estudiante = data;
            });
          }

          deleteEvaluacion_estudiante(id) {
            this.http.delete('http://localhost:3000/evaluacion_estudiante/'+id)
              .subscribe(res => {
                  this.router.navigate(['/evaluacion_estudiantes']);
                }, (err) => {
                  console.log(err);
                }
              );
          }

}