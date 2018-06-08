import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assignation',
  templateUrl: './assignation.component.html',
  styleUrls: ['./assignation.component.css']
})
export class AssignationComponent implements OnInit {

  assignations: any;
  cursos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/asignacion',httpOptions).subscribe(data => {
      console.log(data);
      this.assignations = data;
      for (let assig of this.assignations){
        this.http.get('http://localhost:3000/curso/'+assig.idCurso,httpOptions).subscribe(data => {
          console.log(data);
          assig.idCurso = data;
        });
        this.http.get('http://localhost:3000/user/'+assig.idUser,httpOptions).subscribe(data => {
          console.log(data);
          assig.idUser = data;
        });

      }

    });


  }

}
