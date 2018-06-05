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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
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
}
