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
  }
  login() {
  this.http.post('http://www.aprendizajeactivo.espol.edu.ec:443/api/signinEstudiante',this.loginData).subscribe(resp => {
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
      window.location.reload();
    this.router.navigate(['/inicio']);

  }, err => {
    console.log(err);
    this.http.post('http://www.aprendizajeactivo.espol.edu.ec:443/api/signin',this.loginData).subscribe(resp => {
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
  window.location.reload();
      this.router.navigate(['/evaluaciones']);


    }, err => {
      console.log(err);
        });
  //  this.message = err.error.msg;
  });









}
}
