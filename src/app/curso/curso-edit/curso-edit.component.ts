import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {


      curso: any = {};

      constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

      ngOnInit() {
        this.getCurso(this.route.snapshot.params['id']);
      }

      getCurso(id) {
        this.http.get('http://localhost:3000/curso/'+id,httpOptions).subscribe(data => {
          this.curso = data;
        });
      }

      updateCurso(id) {
    //    this.curso.updated_date = Date.now();
        this.http.put('http://localhost:3000/curso/'+id, this.curso,httpOptions)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/curso-details', id]);
            }, (err) => {
              console.log(err);
            }
          );
      }

}
