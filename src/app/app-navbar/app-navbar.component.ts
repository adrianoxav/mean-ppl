
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
     console.log(aValue);
     console.log(this.token);

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
    localStorage.removeItem('CRNS');
    localStorage.removeItem('infoUser');*/
    localStorage.removeItem('jwtToken');
    window.location.reload();

 this.router.navigate(['/login']);

  }

/*  changeUserPassword(){
    this.router.navigate(['/opciones/cambiarClave']);
  }*/
}
