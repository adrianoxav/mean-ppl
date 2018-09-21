import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-evaluacion-create',
  templateUrl: './evaluacion-create.component.html',
  styleUrls: ['./evaluacion-create.component.css']
})
export class EvaluacionCreateComponent implements OnInit {

  evaluacion = {idCuestionario:String,idCurso:String};
public fechaTerminada = new Date();
public  fechaInicioTomada= new Date();
  cuestionarios={};
  cuestionario: any;
  fechaini: any;
  fechafin: any;
  user={curso:[]};
  idUser:any;
  cursos=[];

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  //  this.fechaTerminada = new Date();
    console.log(this.fechaTerminada);
  //  this.fechaInicioTomada = new Date();
    console.log(this.fechaInicioTomada);
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/cuestionario',httpOptions).subscribe(data => {
      console.log(data);
      this.cuestionarios = data;
    });
    console.log(this.cuestionarios);
    this.idUser=localStorage.getItem('idUser');
    let datos:any;
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/user/'+this.idUser,httpOptions).subscribe(data => {
        datos=data;
        this.user=datos;
        console.log(this.user);

        for(let i of this.user.curso){
          this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/curso/'+i,httpOptions).subscribe(data => {
            this.cursos.push(data);
          });
        //  console.log(this.cursos);
        }
      });
  }

  saveEvaluacion() {
    console.log(this.evaluacion);
    this.fechaInicioTomada=new Date(this.fechaini);
    this.fechaTerminada=new Date(this.fechafin);
    //this.evaluacion.fechaInicioTomada=this.fechaInicioTomada;
  //  this.evaluacion.fechaTerminada=this.fechaTerminada;


        this.http.post('http://www.aprendizajeactivo.espol.edu.ec:3000/evaluacion', this.evaluacion,httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/evaluacion-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  onChange(newValue) {
      console.log(newValue);
      this.evaluacion.idCuestionario = newValue;
      console.log(this.evaluacion.idCuestionario);

      // ... do other stuff here ...
  }


    onChange1(newValue) {
        console.log(newValue);
        this.evaluacion.idCurso = newValue;
        console.log(this.evaluacion.idCurso);

        // ... do other stuff here ...
    }




}
