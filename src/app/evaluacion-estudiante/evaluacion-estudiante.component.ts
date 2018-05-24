import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-evaluacion-estudiante',
  templateUrl: './evaluacion-estudiante.component.html',
  styleUrls: ['./evaluacion-estudiante.component.css']
})
export class EvaluacionEstudianteComponent implements OnInit {

  evaluacion_estudiantes: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/evaluacion_estudiante').subscribe(data => {
      console.log(data);
      this.evaluacion_estudiantes = data;
    });
  }
}
