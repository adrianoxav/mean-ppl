import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

@Component({
  selector: 'app-cuestionario-create',
  templateUrl: './cuestionario-create.component.html',
  styleUrls: ['./cuestionario-create.component.css']
})
export class CuestionarioCreateComponent implements OnInit {

    cuestionario= {};
    preguntas={};
    selected: String[]=[];

   creado: any;
    constructor(private http: HttpClient, private router: Router) { }


    ngOnInit() {
      console.log(this.cuestionario);
//this.creado = Date.now();
//this.cuestionario.preguntas=[];
this.http.get('http://localhost:3000/pregunta', httpOptions).subscribe(data => {
  console.log(data);
  this.preguntas = data;
});

    }

    saveCuestionario() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      this.cuestionario.creado = Date.now();
      this.cuestionario.preguntas=this.selected;
      this.http.post('http://localhost:3000/cuestionario', this.cuestionario,httpOptions)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/cuestionario-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }

    select(id: any){
       let index: number;
       index = this.selected.findIndex(num => num == id);
       if(index==-1){
       this.selected.push(id);}
       else{this.selected.splice(index,1)};
       console.log(this.selected);

     }


  }
