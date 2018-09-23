import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  usuario: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:443/user/'+id, httpOptions).subscribe(data => {
      this.usuario = data;
      console.log(data);
    });
  }

  updateUsuario(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
//    this.usuario.updated_date = Date.now();
    this.http.put('http://localhost:443/api/update/'+id, this.usuario, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/profile']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
