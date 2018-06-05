import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  cuestionarios: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/cuestionario',httpOptions).subscribe(data => {
      console.log(data);
      this.cuestionarios = data;
    });
  }
}
