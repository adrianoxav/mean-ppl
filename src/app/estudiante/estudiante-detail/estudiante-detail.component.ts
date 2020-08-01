import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EstudianteDetailComponent implements OnInit {

  usuario = {};
  admin:any;
  esadmin:Boolean;
  cursos=[];
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.admin = localStorage.getItem('email');

    if(this.admin=="adminfisica"){
      this.esadmin=true;
    }
    this.getUsuarioDetail(this.route.snapshot.params['id']);
  }

  getUsuarioDetail(id) {
    let us:any;
    this.http.get('http://www.ppl.espol.edu.ec:443/estudiante/'+id, httpOptions).subscribe(data => {
      this.usuario = data;
      us=data;
      console.log(data);

      for(let curso of us.curso){
        this.http.get('http://www.ppl.espol.edu.ec:443/curso/'+curso,httpOptions).subscribe(data => {
          console.log(data);
          this.cursos.push(data);
        });
      }
      console.log(data);

    });
  }

  deletePersona(id) {
    this.http.delete('http://www.ppl.espol.edu.ec:443/estudiante/'+id, httpOptions)
      .subscribe(res => {
          this.router.navigate(['/estudiante']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
