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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData = { email:'', password:'' };
  message = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    console.log(this.signupData);

  this.http.post('http://localhost:3000/api/signup',this.signupData).subscribe(resp => {
    console.log(resp);
    this.router.navigate(['login']);
  }, err => {
    this.message = err.error.msg;
  });
}

}
