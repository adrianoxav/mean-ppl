import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-assessment-create',
  templateUrl: './assessment-create.component.html',
  styleUrls: ['./assessment-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssessmentCreateComponent implements OnInit {

  assessment = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  saveAssessment() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.post('http://localhost:3000/assessment', this.assessment,httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/assessment-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
