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
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: any;
  codmateria:any;
  codperiodo:any;
  admin:any;
  esadmin:Boolean;
  private headers = new Headers({ 'Content-Type': 'application/json', 'token': '$0m3-U/1qu3-K3Y'});
private options = new RequestOptions({ headers: this.headers });

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.admin = localStorage.getItem('nombres');
    if(this.admin=="admin"){
      this.esadmin=true;
    }
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
    this.http.get('http://localhost:443/curso',httpOptions).subscribe(data => {
      console.log(data);
      this.cursos = data;
    });
    let httpOptions1 = {
      headers: new HttpHeaders({ 'token': '$0m3-U/1qu3-K3Y' })
    };
    /*this.http.post('http://academico.admision.espol.edu.ec/Api/CursosAlumnos', form, httpOptions1)
    .map(res => {res.json();
      console.log(res.json());
    })
       // ...and calling .json() on the response to return data
                         .subscribe();*/
    }
}
