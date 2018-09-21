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
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  isLoading = true;
  assignations: any;
  cursos= [];

  tipo:any;
assessments:any;
  idUser:any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  this.idUser=localStorage.getItem('idUser');
  this.tipo=localStorage.getItem('tipo');
  console.log(this.idUser);


  this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/evaluacion_estudiantepeer/pendientes/'+this.idUser).subscribe(data => {
    this.assessments=data;
    console.log(data);

  });



  }

}
