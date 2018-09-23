import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pregunta-edit',
  templateUrl: './pregunta-edit.component.html',
  styleUrls: ['./pregunta-edit.component.css']
})
export class PreguntaEditComponent implements OnInit {
  pregunta: any = {};
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPregunta(this.route.snapshot.params['id']);
  }

  getPregunta(id) {
    this.http.get('http://localhost:443/pregunta/'+id, this.httpOptions).subscribe(data => {
      this.pregunta = data;
    });
  }

  updatePregunta(id) {
  //    this.pregunta.updated_date = Date.now();
    this.http.put('http://localhost:443/pregunta/'+id, this.pregunta, this.httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pregunta-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
