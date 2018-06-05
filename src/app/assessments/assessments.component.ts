import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  assessments: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/assessment',httpOptions).subscribe(data => {
      console.log(data);
      this.assessments = data;
    });
  }

}
