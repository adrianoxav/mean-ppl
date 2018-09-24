import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  preguntas: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://aprendizajeactivo.espol.edu.ec:443/pregunta', httpOptions).subscribe(data => {
      console.log(data);
      this.preguntas = data;
    });
  }

}
