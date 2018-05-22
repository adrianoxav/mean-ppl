import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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
        this.http.get('http://localhost:3000/curso/'+id).subscribe(data => {
          this.curso = data;
        });
      }

      deleteCurso(id) {
        this.http.delete('http://localhost:3000/curso/'+id)
          .subscribe(res => {
              this.router.navigate(['/cursos']);
            }, (err) => {
              console.log(err);
            }
          );
      }
}
