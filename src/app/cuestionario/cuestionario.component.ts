import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  cuestionarios: any;
  admin:any;
  esadmin:Boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.admin = localStorage.getItem('email');

    if(this.admin=="adminfisica"){
      this.esadmin=true;
    }
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://www.ppl.espol.edu.ec:443/cuestionario',httpOptions).subscribe(data => {
      console.log(data);
      this.cuestionarios = data;
    });
  }
}
