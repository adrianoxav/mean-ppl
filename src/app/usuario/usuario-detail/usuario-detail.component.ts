import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UsuarioDetailComponent implements OnInit {

  usuario = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getUsuarioDetail(this.route.snapshot.params['id']);
  }

  getUsuarioDetail(id) {
    this.http.get('http://localhost:443/user/'+id, httpOptions).subscribe(data => {
      this.usuario = data;
    });
  }

  deletePersona(id) {
    this.http.delete('http://localhost:443/user/'+id, httpOptions)
      .subscribe(res => {
          this.router.navigate(['/usuarios']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
