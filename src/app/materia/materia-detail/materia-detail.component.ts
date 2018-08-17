import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

@Component({
  selector: 'app-materia-detail',
  templateUrl: './materia-detail.component.html',
  styleUrls: ['./materia-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MateriaDetailComponent implements OnInit {



      materia = {};

      constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

      ngOnInit() {

        this.getCursoDetail(this.route.snapshot.params['id']);
      }

      getCursoDetail(id) {

        this.http.get('http://localhost:3000/materia/'+id,httpOptions).subscribe(data => {
          this.materia = data;
        });
      }

      deleteCurso(id) {
        this.http.delete('http://localhost:3000/materia/'+id,httpOptions)
          .subscribe(res => {
              this.router.navigate(['/materias']);
            }, (err) => {
              console.log(err);
            }
          );
      }
}
