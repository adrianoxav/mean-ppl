import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-evaluacion-estudiante',
  templateUrl: './evaluacion-estudiante.component.html',
  styleUrls: ['./evaluacion-estudiante.component.css']
})
export class EvaluacionEstudianteComponent implements OnInit {

  evaluacion_estudiantes: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:443/evaluacion_estudiante',httpOptions).subscribe(data => {
      console.log(data);
      this.evaluacion_estudiantes = data;
    });
  }
}
