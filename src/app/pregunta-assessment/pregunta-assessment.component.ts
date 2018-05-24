import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pregunta-assessment',
  templateUrl: './pregunta-assessment.component.html',
  styleUrls: ['./pregunta-assessment.component.css']
})
export class PreguntaAssessmentComponent implements OnInit {

    pregunta_assessments: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.get('http://localhost:3000/pregunta_assessment').subscribe(data => {
        console.log(data);
        this.pregunta_assessments = data;
      });
    }

}
