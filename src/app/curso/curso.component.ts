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
    'Content-Type': 'application/json',
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

  private headers = new Headers({ 'Content-Type': 'application/json', 'token': '$0m3-U/1qu3-K3Y'});
private options = new RequestOptions({ headers: this.headers });

  constructor(private http: HttpClient) { }

  ngOnInit() {/*
    this.codmateria="ADM000380";
    this.codperiodo="642";
    let date = new FormData();
         date.append('codmateria', this.codmateria);
         date.append('codperiodo', this.codperiodo );
         let headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');

headers.append('token', '$0m3-U/1qu3-K3Y');
var form = new FormData();
form.append("codmateria", "ADM000380");
form.append("codperiodo", "642");
var config = {headers : {
          "Content-Type": "application/json; charset = utf-8;", "token": "$0m3-U/1qu3-K3Y"
      }
  };*/
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
    this.http.get('http://localhost:3000/curso',httpOptions).subscribe(data => {
      console.log(data);
      this.cursos = data;
    });

/*    this.http.post('http://academico.admision.espol.edu.ec/Api/CursosAlumnos', form, options)
    .map(res => {res.json();
      console.log(res.json());
    })
       // ...and calling .json() on the response to return data
                         .subscribe();*/
    }
}
