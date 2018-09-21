import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assessment-edit',
  templateUrl: './assessment-edit.component.html',
  styleUrls: ['./assessment-edit.component.css']
})
export class AssessmentEditComponent implements OnInit {
  assessment: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAssessment(this.route.snapshot.params['id']);
  }

  getAssessment(id) {
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/assessment/'+id).subscribe(data => {
      this.assessment = data;
    });
  }

  updateAssessment(id) {
//    this.assessment.updated_date = Date.now();
    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:80/assessment/'+id, this.assessment)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/assessment-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
