import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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
    this.http.get('http://www.ppl.espol.edu.ec:443/pregunta_assessment/'+id, httpOptions).subscribe(data => {
      this.pregunta_assessment = data;
    });
  }

  updatePregunta_assessment(id) {
  //    this.pregunta_assessment.updated_date = Date.now();
    this.http.put('http://www.ppl.espol.edu.ec:443/pregunta_assessment/'+id, this.pregunta_assessment, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pregunta_assessment-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
