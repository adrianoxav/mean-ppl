import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessments: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assessment').subscribe(data => {
      console.log(data);
      this.assessments = data;
    });
  }
}
