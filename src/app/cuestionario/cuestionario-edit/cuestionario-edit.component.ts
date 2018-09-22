import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/cuestionario/'+id).subscribe(data => {
        this.cuestionario = data;
      });
    }

    updateCuestionario(id) {
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      this.cuestionario.creado = Date.now();
      this.http.put('http://www.aprendizajeactivo.espol.edu.ec:443/cuestionario/'+id, this.cuestionario,httpOptions)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/cuestionario-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }

}
