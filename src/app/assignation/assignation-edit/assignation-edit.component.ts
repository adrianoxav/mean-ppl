import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-assignation-edit',
  templateUrl: './assignation-edit.component.html',
  styleUrls: ['./assignation-edit.component.css']
})
export class AssignationEditComponent implements OnInit {

  assignation: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAssignation(this.route.snapshot.params['id']);
  }

  getAssignation(id) {
    this.http.get('http://localhost:3000/asignacion/'+id).subscribe(data => {
      this.assignation = data;
    });
  }

  updateAssignation(id) {
//    this.assignation.updated_date = Date.now();
    this.http.put('http://localhost:3000/asignacion/'+id, this.assignation)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/assignation-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
