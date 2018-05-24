
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  title;

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

  }

ngOnChanges(changes: SimpleChanges) {
//  var currentCrn = JSON.parse(localStorage.getItem('CurrentCrn'));
  //let nameCrn = currentCrn && currentCrn.nameCrn;
//  this.title = currentCrn;

}

  logOut(){
  /*  localStorage.removeItem('currentUser');
    localStorage.removeItem('CRNS');
    localStorage.removeItem('infoUser');*/
    this.router.navigate(['/inicio']);
  }

/*  changeUserPassword(){
    this.router.navigate(['/opciones/cambiarClave']);
  }*/
}
