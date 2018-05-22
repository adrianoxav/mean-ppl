import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cuestionario-edit',
  templateUrl: './cuestionario-edit.component.html',
  styleUrls: ['./cuestionario-edit.component.css']
})
export class CuestionarioEditComponent implements OnInit {


    cuestionario: any = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      this.getCuestionario(this.route.snapshot.params['id']);
    }

    getCuestionario(id) {
      this.http.get('http://localhost:3000/cuestionario/'+id).subscribe(data => {
        this.cuestionario = data;
      });
    }

    updateCuestionario(id) {
  //    this.cuestionario.updated_date = Date.now();
      this.http.put('http://localhost:3000/cuestionario/'+id, this.cuestionario)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/cuestionario-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }

}
