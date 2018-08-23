import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  tipo:any;
  user={};
  idUser:any;
  cursos=[];
  estudiantes=[];
  cursoSeleccionado:any;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.idUser=localStorage.getItem('idUser');

      this.http.get('http://localhost:3000/user/'+this.idUser,httpOptions).subscribe(data => {
        this.user=data;
        console.log(this.user);

        for(let i of this.user.curso){
          this.http.get('http://localhost:3000/curso/'+i,httpOptions).subscribe(data => {
            this.cursos.push(data);
          });
        //  console.log(this.cursos);
        }
      });



  }
  onChange(newValue) {
    this.cursoSeleccionado=newValue;
    this.estudiantes=[];
      console.log(newValue);
      this.http.get('http://localhost:3000/curso/'+newValue,httpOptions).subscribe(data => {
        console.log(data.estudiantes)
        for (let i of data.estudiantes){
        this.http.get('http://localhost:3000/estudiantes/'+i,httpOptions).subscribe(data => {
             console.log(data);
             this.estudiantes.push(data);
           });}
      });


      // ... do other stuff here ...
  }


}
