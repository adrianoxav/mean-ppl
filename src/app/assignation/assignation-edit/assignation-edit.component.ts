import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/asignacion/'+id,httpOptions).subscribe(data => {
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
