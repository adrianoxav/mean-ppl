import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import * as XLSX from 'ts-xlsx';
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
  curso = {idMateria: String,numgrupos: Number,nombre:String,cod_materia: String,profesores:[ ],estudiantes:[ ]};
  users : any;
  id:any;
  lista: any;
  arrayBuffer:any;
  materia:any;
  file:File;
  materias:{};
  profesores=[ ];
  estudiantes=[ ];


  incomingfile(event)
   {
   this.file= event.target.files[0];
   }
   onChange(newValue) {
     this.curso.idMateria=newValue;
     console.log(this.curso);
     let httpOptions = {
       headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
     };
 this.materia=newValue;
 let datos:any;

 this.http.get('http://localhost:3000/materia/'+this.materia,httpOptions).subscribe(data => {
   console.log(data);
datos=data;
   this.curso.nombre = datos.nombre;
   this.curso.cod_materia = datos.cod_materia;

 });
       // ... do other stuff here ...
   }

   onchange1(newValue){
     console.log(newValue);

   }




      constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

      ngOnInit() {
        this.getCurso(this.route.snapshot.params['id']);
        this.id=this.route.snapshot.params['id'];
        console.log(this.id);

        let httpOptions = {
          headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
    /*    this.http.get('http://localhost:3000/materia',httpOptions).subscribe(data => {
          console.log(data);
          this.materias = data;
        });*/
        console.log(this.curso);

      }

      getCurso(id) {
        let curs:any;
        this.http.get('http://localhost:3000/curso/'+id,httpOptions).subscribe(data => {
          curs=data;
          this.curso = curs;
          console.log(this.curso);
          for (let i of this.curso.profesores){
            let ver:any;
          this.http.get('http://localhost:3000/user/'+i,httpOptions).subscribe(data => {
               console.log(data);
               ver=data;
               if(ver.email=="admin"){}
               else{
               this.profesores.push(data);}
             });}
             for (let i of this.curso.estudiantes){
             this.http.get('http://localhost:3000/estudiantes/'+i,httpOptions).subscribe(data => {
                  console.log(data);
                  this.estudiantes.push(data);
                });}
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

      saveAssignation(asig) {
        let httpOptions = {
          headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.post('http://localhost:3000/asignacion', asig,httpOptions)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/assignation-details', id]);
            }, (err) => {
              console.log(err);
            }
          );
      }

createUsers(){
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
    for(let l of this.lista){
let assign:any;
let r:any;
      this.http.post('http://localhost:3000/api/register', l, httpOptions)
        .subscribe(res => {
            //console.log(res.msg);
            r=res;
            let idUser = res['_id'];
let assignation:any;
            if(r.msg=="email already exists."){
              let dat:any;
              this.http.get('http://localhost:3000/user/email/'+l.email, httpOptions).subscribe(data => {
                console.log(data);
                dat=data;
                 assignation = {
                     'idCurso': this.id,
                     'grupo': l.grupo,
                   'idUser': dat._id };
                   console.log(assignation);
                   this.http.post('http://localhost:3000/asignacion', assignation,httpOptions)
                     .subscribe(res => {
                         console.log(res);
                       }, (err) => {
                         console.log(err);
                       }
                     );

              }

            );

            }
            else{
             assignation = {
                 'idCurso': this.id,
                 'grupo': l.grupo,
               'idUser': idUser };
               console.log(assignation);
               this.http.post('http://localhost:3000/asignacion', assignation,httpOptions)
                 .subscribe(res => {
                     console.log(res);
                   }, (err) => {
                     console.log(err);
                   }
                 );
                }



    }
);

}
}
}
