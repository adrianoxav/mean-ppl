
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  title;
  token: any;
  tipo:any;
  tip:any;

  nombres: any;
  apellidos: any;
  constructor(private router: Router) {}
/*
  getCrn(id): void {
    this.crnService.getCrn(id).subscribe(
      (res) => this.crn_name = res.shortName,
      (err) => console.log(err),
      () => console.log("done!")
    );

  }*/

  ngOnInit() {
    let aValue = localStorage.getItem('jwtToken');
    this.nombres = localStorage.getItem('nombres');
    this.apellidos = localStorage.getItem('apellidos');
    this.tip = localStorage.getItem('tipo');
    let identificacion = localStorage.getItem('identificacion');


    let httpOptions = {
       headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
     };
     if (aValue==null){
       this.token = false;
       this.router.navigate(['/login']);
     }
     else {
       this.token=true;
     }
     console.log(this.tip);
     if (this.tip=="Profesor"){
       this.tipo=true;

     }
     else (this.tipo=false);
     //console.log(nombres);
    // console.log(apellidos);

  }

ngOnChanges(changes: SimpleChanges) {
//  var currentCrn = JSON.parse(localStorage.getItem('CurrentCrn'));
  //let nameCrn = currentCrn && currentCrn.nameCrn;
//  this.title = currentCrn;

}

istokenized(){


}

  logOut(){
  /*  localStorage.removeItem('currentUser');
    localStorage.removeItem('CRNS');*/
    localStorage.removeItem('nombres');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('tipo');
    localStorage.removeItem('identificacion');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('email');

   window.location.reload();


 this.router.navigate(['/login']);

  }

/*  changeUserPassword(){
    this.router.navigate(['/opciones/cambiarClave']);
  }*/
}
