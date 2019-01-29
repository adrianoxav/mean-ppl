import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as XLSX from 'ts-xlsx';
//let dateFormat = require('dateformat');
import * as dateFormat from 'dateformat';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  isLoading = true;
  assignations: any;
  cursos= [];
  validar:any;
  tipo:any;
assessments:any;
  idUser:any;
  now:any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.now = new Date();

    if(localStorage.getItem('tipo')=="Estudiante"){

      this.router.navigate(['/inicio']);
    }
    else if(localStorage.getItem('tipo')=="Profesor"){

      this.router.navigate(['/evaluaciones']);
    }
    else{
      this.router.navigate(['/login']);

    }

  this.idUser=localStorage.getItem('idUser');
  this.tipo=localStorage.getItem('tipo');
  console.log(this.idUser);

this.cargarAssessments();


  //console.log(this.assessments);

this.validacion();
  }


cargarAssessments(){
  this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion_estudiantepeer/pendientes/'+this.idUser).toPromise().then(data => {
    console.log(data);



    this.assessments=data;
    for(let i=0; i <= this.assessments.length;i++){
      this.assessments[i].fechaInicioTomada = new Date(this.assessments[i].fechaInicioTomada);

      let actual=(dateFormat(this.now, "dd, mm, yyyy, h:MM:ss TT:ss TT"));
      //console.log(data[i].fechaInicioTomada);
      let as=(dateFormat(this.assessments[i].fechaInicioTomada, "dd, mm, yyyy, h:MM:ss TT:ss TT"));
      //console.log(actual);
      //console.log(as);
      if(actual>as){
      //  console.log("dale ñaño");
        this.assessments[i].activo=true;
      }
      else{this.assessments[i].activo=false;}

    }


  });
}

validacion(){
  var dat:any;
  this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion_estudiantepeer/pendientes/'+this.idUser).subscribe(data => {
    console.log(data);
    dat=data;
    if(dat.length==0){
        this.validar=true;

      }
      else
      this.validar=false;
      console.log(this.validar);
  });

}

recargar(){
  this.ngOnInit();


}
}
