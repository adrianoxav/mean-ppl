import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta-detail',
  templateUrl: './pregunta-detail.component.html',
  styleUrls: ['./pregunta-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PreguntaDetailComponent implements OnInit {

  pregunta = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPreguntaDetail(this.route.snapshot.params['id']);
  }

  getPreguntaDetail(id) {
    this.http.get('http://localhost:3000/pregunta/'+id).subscribe(data => {
      this.pregunta = data;
    });
  }

  deletePregunta(id) {
    this.http.delete('http://localhost:3000/pregunta/'+id)
      .subscribe(res => {
          this.router.navigate(['/preguntas']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
