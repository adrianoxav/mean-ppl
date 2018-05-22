import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cuestionario-create',
  templateUrl: './cuestionario-create.component.html',
  styleUrls: ['./cuestionario-create.component.css']
})
export class CuestionarioCreateComponent implements OnInit {

    cuestionario = {};

   today: any;
    constructor(private http: HttpClient, private router: Router) { }


    ngOnInit() {
this.today = new Date();
    }

    saveCuestionario() {
      this.http.post('http://localhost:3000/cuestionario', this.cuestionario)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/cuestionario-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }
  }
