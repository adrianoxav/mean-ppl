import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-evaluacion-estudiante-create',
  templateUrl: './evaluacion-estudiante-create.component.html',
  styleUrls: ['./evaluacion-estudiante-create.component.css']
})
export class EvaluacionEstudianteCreateComponent implements OnInit {


    evaluacion_estudiante = {};
    fechaInicioTomada: any;
    fechaTerminada: any;


    constructor(private http: HttpClient, private router: Router) { }


    ngOnInit() {
      this.fechaTerminada = new Date();
    }

    saveEvaluacion_estudiante() {
      this.http.post('http://www.aprendizajeactivo.espol.edu.ec:3000/evaluacion_estudiante', this.evaluacion_estudiante,httpOptions)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/evaluacion_estudiante-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }
}
