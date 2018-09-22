import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  assessments: any;
  tipo:any;
  idUser:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.idUser=localStorage.getItem('idUser');
    this.tipo=localStorage.getItem('tipo');
    console.log(this.idUser);

    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion_estudiante/finalizados/'+this.idUser).subscribe(data => {
       this.assessments=data;
      console.log(data);

    });
  }

}
