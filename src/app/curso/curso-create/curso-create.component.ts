import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  curso = {};

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  saveCurso() {
    this.http.post('http://localhost:3000/curso', this.curso)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/curso-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
