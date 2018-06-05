import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

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
    this.http.post('http://localhost:3000/pregunta', this.pregunta, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pregunta-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
