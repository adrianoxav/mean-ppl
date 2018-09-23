import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import * as XLSX from 'ts-xlsx';
import { NotificationsService  } from 'angular2-notifications';

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



      constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,private _service: NotificationsService) { }

      ngOnInit() {
        this.getCurso(this.route.snapshot.params['id']);
        this.id=this.route.snapshot.params['id'];
        console.log(this.id);
      }

      getCurso(id) {
        this.http.get('http://localhost:443/materia/'+id,httpOptions).subscribe(data => {
          this.materia = data;
        });
      }

      updateCurso() {
    //    this.curso.updated_date = Date.now();
        this.http.put('http://localhost:443/materia/'+this.id, this.materia,httpOptions)
        .subscribe(res => {
          console.log(res);
            let id = res['_id'];
            this._service.success(
  					'Exito',
  					'materia creado exitosamente',
  					{
  							timeOut: 5000,
  							showProgressBar: true,
  							pauseOnHover: false,
  							clickToClose: false
  					}
  				)
            this.router.navigate(['/materia-details', id]);


          }, (err) => {
            console.log(err);
          }
        );
      }


}
