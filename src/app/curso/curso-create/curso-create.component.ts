import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { NotificationsService  } from 'angular2-notifications';


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


  constructor(private http: HttpClient, private router: Router,private _service: NotificationsService) { }


  ngOnInit() {
  }

  saveCurso() {

    this.http.post('http://localhost:3000/curso', this.curso,httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this._service.success(
					'Exito',
					'Curso creado exitosamente',
					{
							timeOut: 5000,
							showProgressBar: true,
							pauseOnHover: false,
							clickToClose: false
					}
				)
          this.router.navigate(['/curso-details', id]);


        }, (err) => {
          console.log(err);
        }
      );
  }

}
