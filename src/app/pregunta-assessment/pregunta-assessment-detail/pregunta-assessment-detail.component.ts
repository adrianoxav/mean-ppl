import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta-assessment-detail',
  templateUrl: './pregunta-assessment-detail.component.html',
  styleUrls: ['./pregunta-assessment-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PreguntaAssessmentDetailComponent implements OnInit {

    pregunta_assessment = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.getPregunta_assessmentDetail(this.route.snapshot.params['id']);
    }

    getPregunta_assessmentDetail(id) {
      this.http.get('http://localhost:3000/pregunta_assessment/'+id).subscribe(data => {
        this.pregunta_assessment = data;
      });
    }

    deletePregunta_assessment(id) {
      this.http.delete('http://localhost:3000/pregunta_assessment/'+id)
        .subscribe(res => {
            this.router.navigate(['/pregunta_assessments']);
          }, (err) => {
            console.log(err);
          }
        );
    }

}
