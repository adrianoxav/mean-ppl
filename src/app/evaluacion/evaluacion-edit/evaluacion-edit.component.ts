import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-edit',
  templateUrl: './evaluacion-edit.component.html',
  styleUrls: ['./evaluacion-edit.component.css']
})
export class EvaluacionEditComponent implements OnInit {


        evaluacion: any = {};

        constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

        ngOnInit() {
          this.getEvaluacion(this.route.snapshot.params['id']);
          console.log('id');

        }

        getEvaluacion(id) {
          this.http.get('http://localhost:3000/evaluacion/'+id,httpOptions).subscribe(data => {
            this.evaluacion = data;
          });
        }

        updateEvaluacion(id) {
      //    this.evaluacion.updated_date = Date.now();
          this.http.put('http://localhost:3000/evaluacion/'+id, this.evaluacion,httpOptions)
            .subscribe(res => {
                let id = res['_id'];
                this.router.navigate(['/evaluacion-details', id]);
              }, (err) => {
                console.log(err);
              }
            );
        }
}
