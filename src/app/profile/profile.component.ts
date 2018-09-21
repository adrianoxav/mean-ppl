import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  idUser: any;
    usuario = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.idUser= localStorage.getItem("idUser");
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/user/'+this.idUser, httpOptions).subscribe(data => {
        this.usuario = data;
      });    }



}
