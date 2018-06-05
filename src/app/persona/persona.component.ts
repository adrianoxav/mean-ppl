import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/persona',httpOptions).subscribe(data => {
      console.log(data);
      this.personas = data;
    });
  }
}
