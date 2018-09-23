import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CursoDetailComponent implements OnInit {



      curso = {};

      constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

      ngOnInit() {

        this.getCursoDetail(this.route.snapshot.params['id']);
      }

      getCursoDetail(id) {

        this.http.get('http://localhost:443/curso/'+id,httpOptions).subscribe(data => {
          this.curso = data;
        });
      }

      deleteCurso(id) {
        this.http.delete('http://localhost:443/curso/'+id,httpOptions)
          .subscribe(res => {
              this.router.navigate(['/cursos']);
            }, (err) => {
              console.log(err);
            }
          );
      }
}
