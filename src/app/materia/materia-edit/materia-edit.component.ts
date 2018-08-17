import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import * as XLSX from 'ts-xlsx';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-materia-edit',
  templateUrl: './materia-edit.component.html',
  styleUrls: ['./materia-edit.component.css']
})
export class MateriaEditComponent implements OnInit {
  materia = {};
  users : any;
  id:any;
  lista: any;



      constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

      ngOnInit() {
        this.getCurso(this.route.snapshot.params['id']);
        this.id=this.route.snapshot.params['id'];
        console.log(this.id);
      }

      getCurso(id) {
        this.http.get('http://localhost:3000/materia/'+id,httpOptions).subscribe(data => {
          this.materia = data;
        });
      }

      updateCurso(id) {
    //    this.curso.updated_date = Date.now();
        this.http.put('http://localhost:3000/materia/'+id, this.materia,httpOptions)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/materia-details', id]);
            }, (err) => {
              console.log(err);
            }
          );
      }

    
}
