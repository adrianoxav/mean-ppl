import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  assessments: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/assessment').subscribe(data => {
      console.log(data);
      this.assessments = data;
    });
  }

}
