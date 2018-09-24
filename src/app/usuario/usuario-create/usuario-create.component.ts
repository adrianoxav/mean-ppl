import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario = {};

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  saveUsuario() {
    this.http.post('http://aprendizajeactivo.espol.edu.ec:443/api/register', this.usuario, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/usuario-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
