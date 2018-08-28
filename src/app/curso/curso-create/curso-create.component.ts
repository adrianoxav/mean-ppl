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
  materias={};
materia:any;
cursocreado:any;



  constructor(private http: HttpClient, private router: Router,private _service: NotificationsService) { }


  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/materia',httpOptions).subscribe(data => {
      console.log(data);
      this.materias = data;
    });
  }

  saveCurso() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    console.log(this.curso);
    this.http.post('http://localhost:3000/curso', this.curso,httpOptions)
      .subscribe(res => {
        console.log(res);
          let id = res['_id'];
          this.cursocreado=res;
          console.log(this.cursocreado);
          for(var i=0;i<this.curso.numgrupos;i++){
            let grupo = { nombre:(i+1), curso:id };
            console.log(grupo);
            this.http.post('http://localhost:3000/grupo', grupo,httpOptions)
              .subscribe(res => {
                console.log(res);
                this.cursocreado.grupos.push(res['_id']);
                console.log(this.cursocreado);
                console.log(this.cursocreado['_id']);
                this.http.put('http://localhost:3000/cursos/'+this.cursocreado['_id'],this.cursocreado).subscribe(data => {
                  console.log(data);


              });
          }, (err) => {
            console.log(err); 
          }
        );

          }


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
  onChange(newValue) {
    this.curso.idMateria=newValue;
    console.log(this.curso);
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
this.materia=newValue;
this.http.get('http://localhost:3000/materia/'+this.materia,httpOptions).subscribe(data => {
  console.log(data);

  this.curso.nombre = data.nombre;
  this.curso.cod_materia = data.cod_materia;

});
      // ... do other stuff here ...
  }

  onchange1(newValue){
    console.log(newValue);

  }

}
