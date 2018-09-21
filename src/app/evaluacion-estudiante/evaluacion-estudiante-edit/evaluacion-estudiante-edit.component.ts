import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-estudiante-edit',
  templateUrl: './evaluacion-estudiante-edit.component.html',
  styleUrls: ['./evaluacion-estudiante-edit.component.css']
})
export class EvaluacionEstudianteEditComponent implements OnInit {

          evaluacion_estudiante: any = {};

          constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

          ngOnInit() {
            this.getEvaluacion_estudiante(this.route.snapshot.params['id']);
            console.log('id');

          }

          getEvaluacion_estudiante(id) {
            this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/evaluacion_estudiante/'+id,httpOptions).subscribe(data => {
              this.evaluacion_estudiante = data;
            });
          }

          updateEvaluacion_estudiante(id) {
        //    this.evaluacion.updated_date = Date.now();
            this.http.put('http://www.aprendizajeactivo.espol.edu.ec:3000/evaluacion_estudiante/'+id, this.evaluacion_estudiante,httpOptions)
              .subscribe(res => {
                  let id = res['_id'];
                  this.router.navigate(['/evaluacion_estudiante-details', id]);
                }, (err) => {
                  console.log(err);
                }
              );
          }
}
