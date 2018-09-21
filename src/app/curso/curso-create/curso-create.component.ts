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

  curso = {idMateria: String,numgrupos: Number,nombre:String,cod_materia: String};
  users : any;
  materias={};
materia:any;
cursocreado:any;
 gruposcreados=[];



  constructor(private http: HttpClient, private router: Router,private _service: NotificationsService) { }


  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/materia',httpOptions).subscribe(data => {
      console.log(data);
      this.materias = data;
    });
  }

  saveCurso() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    console.log(this.curso);
    this.http.post('http://www.aprendizajeactivo.espol.edu.ec:80/curso', this.curso,httpOptions)
      .subscribe(res => {

        console.log(res);
          let id = res['_id'];
          this.cursocreado=res;
          console.log(this.cursocreado);
          var nomgrup=this.curso.numgrupos;
          for(var i=1;i<=Number(nomgrup);i++){
            let grupo = { nombre:i, curso:id };
            console.log(grupo);
            this.http.post('http://www.aprendizajeactivo.espol.edu.ec:80/grupo', grupo,httpOptions)
              .toPromise().then(res => {
                console.log(res);
                this.cursocreado.grupos.push(res['_id']);


          }, (err) => {
            console.log(err);
          }
        );

          }
        //  this.updategrupos();
        this.router.navigate(['/curso-details', id]);


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



        }, (err) => {
          console.log(err);
        }
      );

  }

  updategrupos(){
    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:80/curso/'+this.cursocreado['_id'],this.cursocreado,httpOptions).toPromise().then(data => {
      console.log(data);


  });

  }
  onChange(newValue) {
    this.curso.idMateria=newValue;
    console.log(this.curso);
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
this.materia=newValue;
let datos:any;
this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/materia/'+this.materia,httpOptions).subscribe(data => {
  console.log(data);
  datos=data;
  this.curso.nombre = datos.nombre;
  this.curso.cod_materia = datos.cod_materia;

});
      // ... do other stuff here ...
  }

  onchange1(newValue){
    console.log(newValue);

  }

}
