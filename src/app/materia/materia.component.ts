import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Constants } from '../config/constants';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
/*
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/ json',
    'token': '$0m3-U/1qu3-K3Y'
  })
};*/

let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' ,'token': '$0m3-U/1qu3-K3Y'});
    let options = new RequestOptions({ headers: headers });


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html', 
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materias: any;
  codmateria:any;
  codperiodo:any;

  private headers = new Headers({ 'Content-Type': 'application/json', 'token': '$0m3-U/1qu3-K3Y'});
private options = new RequestOptions({ headers: this.headers });

  constructor(private http: HttpClient) { }

  ngOnInit() {

  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/materia',httpOptions).subscribe(data => {
      console.log(data);
      this.materias = data;
    });

    /*this.http.post('http://academico.admision.espol.edu.ec/Api/CursosAlumnos', form, httpOptions1)
    .map(res => {res.json();
      console.log(res.json());
    })
       // ...and calling .json() on the response to return data
                         .subscribe();*/
    }
}
