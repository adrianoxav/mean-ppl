import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/user/'+id, httpOptions).subscribe(data => {
      this.usuario = data;
    });
  }

  updateUsuario(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
//    this.usuario.updated_date = Date.now();
    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:3000/user/'+id, this.usuario, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/usuario-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
