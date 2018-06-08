import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-assignation-edit',
  templateUrl: './assignation-edit.component.html',
  styleUrls: ['./assignation-edit.component.css']
})
export class AssignationEditComponent implements OnInit {
  assignation = {};
  cursos={};
  curso: any;
  usuarios={};
  usuario: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAssignation(this.route.snapshot.params['id']);
  }

  getAssignation(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/asignacion/'+id,httpOptions).subscribe(data => {
      this.assignation = data;
    });
    this.http.get('http://localhost:3000/curso',httpOptions).subscribe(data => {
      console.log(data);
      this.cursos = data;
    });
    this.http.get('http://localhost:3000/user',httpOptions).subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }

  updateAssignation(id) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
//    this.assignation.updated_date = Date.now();
    this.http.put('http://localhost:3000/asignacion/'+id, this.assignation,httpOptions)
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
