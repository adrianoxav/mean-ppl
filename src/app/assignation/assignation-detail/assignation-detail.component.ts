import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignation-detail',
  templateUrl: './assignation-detail.component.html',
  styleUrls: ['./assignation-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AssignationDetailComponent implements OnInit {

  assignation = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getAssignationDetail(this.route.snapshot.params['id']);
  }

  getAssignationDetail(id) {
    this.http.get('http://localhost:3000/asignacion/'+id).subscribe(data => {
      this.assignation = data;
    });
  }

  deleteAssignation(id) {
    this.http.delete('http://localhost:3000/asignacion/'+id)
      .subscribe(res => {
          this.router.navigate(['/assignations']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
