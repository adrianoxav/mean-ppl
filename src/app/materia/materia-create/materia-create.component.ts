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
  selector: 'app-materia-create',
  templateUrl: './materia-create.component.html',
  styleUrls: ['./materia-create.component.css']
})
export class MateriaCreateComponent implements OnInit {

  materia = {};
  users : any;


  constructor(private http: HttpClient, private router: Router,private _service: NotificationsService) { }


  ngOnInit() {
  }

  saveCurso() {

    this.http.post('http://www.aprendizajeactivo.espol.edu.ec:80/materia', this.materia,httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this._service.success(
					'Exito',
					'materia creado exitosamente',
					{
							timeOut: 5000,
							showProgressBar: true,
							pauseOnHover: false,
							clickToClose: false
					}
				)
          this.router.navigate(['/materia-details', id]);


        }, (err) => {
          console.log(err);
        }
      );
  }

}
