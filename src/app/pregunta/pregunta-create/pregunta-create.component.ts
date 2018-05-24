import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pregunta-create',
  templateUrl: './pregunta-create.component.html',
  styleUrls: ['./pregunta-create.component.css']
})
export class PreguntaCreateComponent implements OnInit {

  pregunta = {};

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  savePregunta() {
    this.http.post('http://localhost:3000/pregunta', this.pregunta)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pregunta-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
