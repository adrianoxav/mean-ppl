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
    pregunta:any;

    preguntas:{};
    preg={};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.getCuestionarioDetail(this.route.snapshot.params['id']);



    }

    getCuestionarioDetail(id) {
      this.http.get('http://localhost:3000/cuestionario/'+id).subscribe(data => {
        this.cuestionario = data;
        console.log(data);
        this.getPreguntas(this.cuestionario.preguntas);
        console.log(this.cuestionario);

      });
  //    this.getPreguntas(this.cuestionario.preguntas);

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
    getPreguntas(preguntas){
      var i:any;
      let preg=[];
      for (i of preguntas){
        console.log(i);

        this.http.get('http://localhost:3000/pregunta/'+i).subscribe(data => {
          i = data;
          console.log(data);
          preg.push(data.pregunta);
        });

      }
console.log(preg);
this.cuestionario.preguntas=preg;
    }
}
