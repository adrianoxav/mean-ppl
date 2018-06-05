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
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 users : any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  console.log(httpOptions);
  this.http.get('http://localhost:3000/user', httpOptions).subscribe(data => {
    this.users = data;
    console.log(this.users);
  }, err => {
    if(err.status === 401) {
      this.router.navigate(['login']);
    }
  });
}

}
