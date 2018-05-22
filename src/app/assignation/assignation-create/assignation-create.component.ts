import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    this.http.post('http://localhost:3000/asignacion', this.assignation)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/assignation-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
