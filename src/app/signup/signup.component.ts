import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData = { email:'', password:'',curso:[],tipo:"", };
  message = '';
  cursos = {};
  idcurso='';
  cursoaActualizar={};
  cursosSeleccionados=[];
  selected: String[]=[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('http://localhost:443/cursos').subscribe(data => {
      console.log(data);
      this.cursos = data;
    });
  }

  signup() {
    console.log(this.signupData);

  console.log(this.cursoaActualizar);
  this.signupData.curso=this.cursosSeleccionados;
  if(this.signupData.tipo=="Estudiante"){
    let res:any;
  this.http.post('http://localhost:443/api/suestudiante',this.signupData).subscribe(resp => {
    console.log(resp);
    res=resp;
    let idUser = resp['_id'];
    if(res.msg=="email already exists. in estudiantes"){
      let dat:any;
      this.http.get('http://localhost:443/estudiantes/email/'+this.signupData.email).subscribe(data => {
        console.log(data);
        dat=data;
        idUser=dat._id;

        for (let cursosel of this.cursosSeleccionados){
          let cursoactual:any;
          this.http.get('http://localhost:443/cursos/'+cursosel).subscribe(data => {
            cursoactual=data;



          cursoactual.estudiantes.push(idUser);
        this.http.put('http://localhost:443/cursos/'+cursosel,cursoactual).subscribe(data => {
          console.log(data);

    });
      });
      }
        }
        );
    this.router.navigate(['login']);
    }
    else{
      for (let cursosel of this.cursosSeleccionados){
        let cursoactual:any;

        this.http.get('http://localhost:443/cursos/'+cursosel).subscribe(data => {
          cursoactual=data;



        cursoactual.estudiantes.push(idUser);
      this.http.put('http://localhost:443/cursos/'+cursosel,cursoactual).subscribe(data => {
        console.log(data);

  });
    });
    }
    this.router.navigate(['login']);

    }


});
}

}

onChange(newValue) {
  //this.cursosSeleccionados.push(newValue);
    console.log(newValue);
    //this.signupData.curso.push(newValue);
    console.log(this.cursosSeleccionados);

    // ... do other stuff here ...
}

select(id: any){
   let index: number;
   index = this.cursosSeleccionados.findIndex(num => num == id);
   if(index==-1){
   this.cursosSeleccionados.push(id);}
   else{this.cursosSeleccionados.splice(index,1)};
   console.log(this.cursosSeleccionados);

 }

}
