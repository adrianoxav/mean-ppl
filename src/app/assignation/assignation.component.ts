import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assignation',
  templateUrl: './assignation.component.html',
  styleUrls: ['./assignation.component.css']
})
export class AssignationComponent implements OnInit {
  dtOptionsAssig: any = {};
  isLoading = true;
  assignations: any;
  cursos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
