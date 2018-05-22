import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-evaluacion-create',
  templateUrl: './evaluacion-create.component.html',
  styleUrls: ['./evaluacion-create.component.css']
})
export class EvaluacionCreateComponent implements OnInit {

  evaluacion = {};
  fechaInicioTomada: any;
  fechaTerminada: any;


  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.fechaInicioTomada = new Date();
    this.fechaTerminada = new Date();


  }

  saveEvaluacion() {
    this.http.post('http://localhost:3000/evaluacion', this.evaluacion)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/evaluacion-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
