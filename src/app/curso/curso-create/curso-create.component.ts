import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';

let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  curso = {};
  users : any;


  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  saveCurso() {

    this.http.post('http://localhost:3000/curso', this.curso,httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/curso-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
