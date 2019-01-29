import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.css']
})
export class EstudianteEditComponent implements OnInit {

  usuario: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/estudiante/'+id, httpOptions).subscribe(data => {
      this.usuario = data;
      console.log(data);
    });
  }

  updateUsuario(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
//    this.usuario.updated_date = Date.now();
    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:443/estudiante/'+id, this.usuario, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/estudiante-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
