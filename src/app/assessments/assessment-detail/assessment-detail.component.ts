import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assessment-detail',
  templateUrl: './assessment-detail.component.html',
  styleUrls: ['./assessment-detail.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  export class AssessmentDetailComponent implements OnInit {

    assessment = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.getAssessmentDetail(this.route.snapshot.params['id']);
    }

    getAssessmentDetail(id) {
      this.http.get('http://localhost:3000/assessment/'+id).subscribe(data => {
        this.assessment = data;
      });
    }

    deleteAssessment(id) {
      this.http.delete('http://localhost:3000/assessment/'+id)
        .subscribe(res => {
            this.router.navigate(['/assessments']);
          }, (err) => {
            console.log(err);
          }
        );
    }
}
