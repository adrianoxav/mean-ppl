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
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  restaurar = { email:'', identificacion:'', password:'', password1:'',tipo:'' };
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
  reset() {
    if(this.restaurar.tipo=="Estudiante"){
  this.http.post('http://www.aprendizajeactivo.espol.edu.ec:443/api/resetPasswordEstudiante',this.restaurar).toPromise().then(resp => {
    this.data = resp;
    console.log(resp);

      this.router.navigate(['/login']);


});
}
else if(this.restaurar.tipo=="Profesor"){

//    console.log(err);
    this.http.post('http://www.aprendizajeactivo.espol.edu.ec:443/api/resetPassword',this.restaurar).toPromise().then(resp => {
      this.data = resp;
      console.log(resp);




        this.router.navigate(['/login']);

    });
  //  this.message = err.error.msg;







}
}
}
