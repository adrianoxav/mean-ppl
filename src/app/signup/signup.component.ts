import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  signupData = { email:'', password:'' };
  message = '';
  cursos = {};
  idcurso='';
  cursoaActualizar={};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/cursos').subscribe(data => {
      console.log(data);
      this.cursos = data;
    });
  }

  signup() {
    console.log(this.signupData);
    this.http.get('http://localhost:3000/cursos/'+this.idcurso).subscribe(data => {
      this.cursoaActualizar=data;


  });
  console.log(this.cursoaActualizar);
  this.signupData.curso=this.idcurso;
  if(this.signupData.tipo=="Estudiante"){

  this.http.post('http://localhost:3000/api/suestudiante',this.signupData).subscribe(resp => {
    console.log(resp);
    let idUser = resp['_id'];

    if(resp.msg=="email already exists. in estudiantes"){
      this.http.get('http://localhost:3000/estudiantes/email/'+this.signupData.email).subscribe(data => {
        console.log(data);
        idUser=data._id;
        let asignacion = { idUser:data._id, idcurso:this.idcurso,tipo:this.signupData.tipo };
        console.log(asignacion);

        this.cursoaActualizar.estudiantes.push(idUser);

        this.http.put('http://localhost:3000/cursos/'+this.idcurso,this.cursoaActualizar).subscribe(data => {
          console.log(data);
      });
        }
        );
    //this.router.navigate(['login']);
    }
    else{
      let asignacion = { idUser:idUser, idcurso:this.idcurso,tipo:this.signupData.tipo };
        this.cursoaActualizar.estudiantes.push(idUser);
      this.http.put('http://localhost:3000/cursos/'+this.idcurso,this.cursoaActualizar).subscribe(data => {
        console.log(data);


    });
    }


});
}

else if(this.signupData.tipo=="Profesor"){

this.http.post('http://localhost:3000/api/signup',this.signupData).subscribe(resp => {
  console.log(resp);
  let idUser = resp['_id'];

  if(resp.msg=="email already exists."){
    this.http.get('http://localhost:3000/users/email/'+this.signupData.email).subscribe(data => {
      console.log(data);
      idUser=data._id;

      let asignacion = { idUser:data._id, idcurso:this.idcurso,tipo:this.signupData.tipo };
      console.log(asignacion);

      this.cursoaActualizar.profesores.push(idUser);

      this.http.put('http://localhost:3000/cursos/'+this.idcurso,this.cursoaActualizar).subscribe(data => {
        console.log(data);
    });
      }
      );
  //this.router.navigate(['login']);
  }
  else{
    let asignacion = { idUser:idUser, idcurso:this.idcurso,tipo:this.signupData.tipo };
      this.cursoaActualizar.profesores.push(idUser);
    this.http.put('http://localhost:3000/cursos/'+this.idcurso,this.cursoaActualizar).subscribe(data => {
      console.log(data);


  });
  }


});
}
}

onChange(newValue) {
    console.log(newValue);
    this.signupData.curso = newValue;
    console.log(this.signupData.curso);

    // ... do other stuff here ...
}

}
