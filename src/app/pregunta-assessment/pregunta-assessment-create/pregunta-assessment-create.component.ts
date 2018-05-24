import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pregunta-assessment-create',
  templateUrl: './pregunta-assessment-create.component.html',
  styleUrls: ['./pregunta-assessment-create.component.css']
})
export class PreguntaAssessmentCreateComponent implements OnInit {

  pregunta_assessment = {};

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  savePregunta_assessment() {
    this.http.post('http://localhost:3000/pregunta_assessment', this.pregunta_assessment)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pregunta_assessment-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
