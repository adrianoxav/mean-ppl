import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = { email:'', password:'' };
  message = '';
  data: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('tipo')=="Estudiante"){

      this.router.navigate(['/inicio']);
    }
    if(localStorage.getItem('tipo')=="Profesor"){

      this.router.navigate(['/evaluaciones']);
    }
  }
  login() {
  this.http.post('http://www.ppl.espol.edu.ec:443/api/signinEstudiante',this.loginData).toPromise().then(resp => {
    this.data = resp;
    console.log(resp);
    localStorage.setItem('jwtToken', this.data.token);
    localStorage.setItem('nombres', this.data.user.nombres);
    localStorage.setItem('apellidos', this.data.user.apellidos);
    localStorage.setItem('tipo', this.data.user.tipo);
    localStorage.setItem('email', this.data.user.email);
    localStorage.setItem('identificacion', this.data.user.identificacion);
    localStorage.setItem('idUser', this.data.user._id);
    localStorage.setItem('curso', this.data.user.curso);
    if(localStorage.getItem('tipo')=="Estudiante"){
      window.location.reload();

      this.router.navigate(['/inicio']);
    }

});
//    console.log(err);
    this.http.post('http://www.ppl.espol.edu.ec:443/api/signin',this.loginData).toPromise().then(resp => {
      this.data = resp;
      console.log(resp);
      localStorage.setItem('jwtToken', this.data.token);
      localStorage.setItem('nombres', this.data.user.nombres);
      localStorage.setItem('apellidos', this.data.user.apellidos);
      localStorage.setItem('tipo', this.data.user.tipo);
      localStorage.setItem('email', this.data.user.email);
      localStorage.setItem('identificacion', this.data.user.identificacion);
      localStorage.setItem('idUser', this.data.user._id);
      localStorage.setItem('curso', this.data.user.curso);


      if(localStorage.getItem('tipo')=="Profesor"){
        window.location.reload();

        this.router.navigate(['/evaluaciones']);
      }
    });
  //  this.message = err.error.msg;







}
}
