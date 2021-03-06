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
  cuestionario = {nombre: String,creado: Number,preguntas:[]};


    preguntas={};
    selected: String[]=[];
    nombre:any;
   creado: any;
    constructor(private http: HttpClient, private router: Router) { }


    ngOnInit() {
      console.log(this.cuestionario);
//this.creado = Date.now();
//this.cuestionario.preguntas=[];
this.nombre="";
this.http.get('http://www.ppl.espol.edu.ec:443/pregunta', httpOptions).subscribe(data => {
  console.log(data);
  this.preguntas = data;
});

    }

    saveCuestionario() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };

      this.cuestionario.nombre = this.nombre;
      let dates:any;
      dates=Date.now();
      this.cuestionario.creado = dates;
      this.cuestionario.preguntas=this.selected;
      console.log(this.cuestionario);
      this.http.post('http://www.ppl.espol.edu.ec:443/cuestionario', this.cuestionario,httpOptions)
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
