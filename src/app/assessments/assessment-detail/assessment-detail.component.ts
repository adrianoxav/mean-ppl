import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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

      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/assessment/'+id,httpOptions).subscribe(data => {
        this.assessment = data;
      });
    }

    deleteAssessment(id) {
      this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:80/assessment/'+id,httpOptions)
        .subscribe(res => {
            this.router.navigate(['/assessments']);
          }, (err) => {
            console.log(err);
          }
        );
    }
}
