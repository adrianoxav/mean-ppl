import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-pregunta-assessment',
  templateUrl: './pregunta-assessment.component.html',
  styleUrls: ['./pregunta-assessment.component.css']
})
export class PreguntaAssessmentComponent implements OnInit {

    pregunta_assessments: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/pregunta_assessment', httpOptions).subscribe(data => {
        console.log(data);
        this.pregunta_assessments = data;
      });
    }

}
