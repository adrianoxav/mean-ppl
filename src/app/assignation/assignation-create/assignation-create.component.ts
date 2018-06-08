import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assignation-create',
  templateUrl: './assignation-create.component.html',
  styleUrls: ['./assignation-create.component.css']
})
export class AssignationCreateComponent implements OnInit {

  assignation = {};
  cursos={};
  curso: any;
  usuarios={};
  usuario: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/curso',httpOptions).subscribe(data => {
      console.log(data);
      this.cursos = data;
    });
    this.http.get('http://localhost:3000/user',httpOptions).subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }

  saveAssignation() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.post('http://localhost:3000/asignacion', this.assignation,httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/assignation-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  onChange(newValue) {
      console.log(newValue);
      this.assignation.idCurso = newValue;
      console.log(this.assignation.idCurso);

      // ... do other stuff here ...
  }
  onChange1(newValue) {
      console.log(newValue);
      this.assignation.idUser = newValue;
      console.log(this.assignation.idUser);

      // ... do other stuff here ...
  }
}
