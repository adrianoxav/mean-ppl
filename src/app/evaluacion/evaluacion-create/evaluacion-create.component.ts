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
  cuestionarios={};
  cuestionario: any;
  date: Date = new Date();
  settings = {
      bigBanner: true,
      format: 'dd-MMM-yyyy hh:mm a',
      defaultOpen: true
  }


  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.fechaTerminada = new Date();
    console.log(this.fechaTerminada);
    this.fechaInicioTomada = new Date();
    console.log(this.fechaInicioTomada);
    this.http.get('http://localhost:3000/cuestionario').subscribe(data => {
      console.log(data);
      this.cuestionarios = data;
    });
    console.log(this.cuestionarios);

  }

  saveEvaluacion() {
    console.log(this.evaluacion);
//    this.evaluacion.fechaInicioTomada=this.fechaInicioTomada;
//    this.evaluacion.fechaTerminada=this.fechaTerminada;
    console.log(this.evaluacion.fechaTerminada);

        this.http.post('http://localhost:3000/evaluacion', this.evaluacion)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/evaluacion-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  onChange(newValue) {
      console.log(newValue);
      this.evaluacion.idCuestionario = newValue;
      console.log(this.evaluacion.idCuestionario);

      // ... do other stuff here ...
  }

  onChange1(newValue) {
      console.log(newValue);
      this.evaluacion.fechaInicioTomada = newValue;
      console.log(this.evaluacion.fechaInicioTomada);

      // ... do other stuff here ...
  }



}
