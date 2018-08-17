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

  idUser:any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  this.idUser=localStorage.getItem('idUser');
  this.tipo=localStorage.getItem('tipo');


  this.http.get('http://localhost:3000/asignacion/id/'+this.idUser,httpOptions).subscribe(data => {
    console.log(data);
    console.log(this.idUser);
    for (let assig of data){
      this.http.get('http://localhost:3000/curso/'+assig.idCurso,httpOptions).subscribe(data => {
        this.cursos.push(data);
        console.log(data);

      });

    }
     },
    error => console.log(error),
    () => this.isLoading = false
  );
  console.log(this.cursos);

  }

}
