import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario-detail',
  templateUrl: './cuestionario-detail.component.html',
  styleUrls: ['./cuestionario-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CuestionarioDetailComponent implements OnInit {


    cuestionario = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.getCuestionarioDetail(this.route.snapshot.params['id']);
    }

    getCuestionarioDetail(id) {
      this.http.get('http://localhost:3000/cuestionario/'+id).subscribe(data => {
        this.cuestionario = data;
      });
    }

    deleteCuestionario(id) {
      this.http.delete('http://localhost:3000/cuestionario/'+id)
        .subscribe(res => {
            this.router.navigate(['/cuestionarios']);
          }, (err) => {
            console.log(err);
          }
        );
    }
}
