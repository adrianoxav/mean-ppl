import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta-detail',
  templateUrl: './pregunta-detail.component.html',
  styleUrls: ['./pregunta-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PreguntaDetailComponent implements OnInit {
  admin:any;
  esadmin:Boolean;
  pregunta = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.admin = localStorage.getItem('email');

    if(this.admin=="adminfisica"){
      this.esadmin=true;
    }
    this.getPreguntaDetail(this.route.snapshot.params['id']);
  }

  getPreguntaDetail(id) {
    this.http.get('http://www.ppl.espol.edu.ec:443/pregunta/'+id, httpOptions).subscribe(data => {
      this.pregunta = data;
      console.log(data);
    });
  }

  deletePregunta(id) {
    this.http.delete('http://www.ppl.espol.edu.ec:443/pregunta/'+id, httpOptions)
      .subscribe(res => {
          this.router.navigate(['/preguntas']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
