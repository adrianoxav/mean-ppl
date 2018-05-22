import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-evaluacion-detail',
  templateUrl: './evaluacion-detail.component.html',
  styleUrls: ['./evaluacion-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EvaluacionDetailComponent implements OnInit {


        evaluacion = {};

        constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

        ngOnInit() {
          this.getEvaluacionDetail(this.route.snapshot.params['id']);
          console.log('id');
        }

        getEvaluacionDetail(id) {
          this.http.get('http://localhost:3000/evaluacion/'+id).subscribe(data => {
            this.evaluacion = data;
          });
        }

        deleteEvaluacion(id) {
          this.http.delete('http://localhost:3000/evaluacion/'+id)
            .subscribe(res => {
                this.router.navigate(['/evaluaciones']);
              }, (err) => {
                console.log(err);
              }
            );
        }
}
