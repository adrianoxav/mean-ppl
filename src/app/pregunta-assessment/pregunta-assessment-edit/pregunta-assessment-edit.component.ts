import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta-assessment-edit',
  templateUrl: './pregunta-assessment-edit.component.html',
  styleUrls: ['./pregunta-assessment-edit.component.css']
})
export class PreguntaAssessmentEditComponent implements OnInit {

  pregunta_assessment: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPregunta_assessment(this.route.snapshot.params['id']);
  }

  getPregunta_assessment(id) {
    this.http.get('http://localhost:3000/pregunta_assessment/'+id).subscribe(data => {
      this.pregunta_assessment = data;
    });
  }

  updatePregunta_assessment(id) {
  //    this.pregunta_assessment.updated_date = Date.now();
    this.http.put('http://localhost:3000/pregunta_assessment/'+id, this.pregunta_assessment)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pregunta_assessment-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
