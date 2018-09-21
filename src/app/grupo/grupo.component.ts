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
  user={curso:[]};
  idUser:any;
  cursos=[];
  estudiantes=[];
  cursoSeleccionado:any;
  numgrupos:any;
  clean:any;
  grupos=[];
  buttonDisabled = true;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    this.buttonDisabled = true;
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.idUser=localStorage.getItem('idUser');
let datos:any
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/user/'+this.idUser,httpOptions).subscribe(data => {
        datos=data;
        this.user=datos;
        console.log(this.user);

        for(let i of this.user.curso){
          this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/curso/'+i,httpOptions).subscribe(data => {
            this.cursos.push(data);
          });
        //  console.log(this.cursos);
        }
      });



  }



  actualizarGrupos() {

    for(let i of this.grupos){
        i.estudiantes=[];
    }

    for(let i of this.estudiantes){
      for(let j of this.grupos){
          if(i.grupo==j.nombre){
            j.estudiantes.push(i._id);
          }

    }
  }


console.log(this.grupos);
this.saveGrupos();
}

saveGrupos(){

    for(let grup of this.grupos){

    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:3000/grupo/actualizargrupos/',grup,httpOptions).toPromise().then(data => {
      console.log(data);
  });




}
this.buttonDisabled = true;



}


  onChange(newValue) {
    this.buttonDisabled = true;
    this.grupos=[];
    this.cursoSeleccionado=newValue;
    this.estudiantes=[];
      console.log(newValue);
      let nom:any;
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/curso/'+newValue,httpOptions).subscribe(data => {
        nom=data;
        this.numgrupos=nom.numgrupos;
        console.log(nom.estudiantes)
        for (let i of nom.estudiantes){
          let noom:any;

        this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/estudiantes/'+i,httpOptions).subscribe(data => {
             console.log(data);
             noom=data;
             this.estudiantes.push(data);
           });}

           for (let j of nom.grupos){
             this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/grupo/'+j,httpOptions).toPromise().then(data => {
                  //console.log(data);
                  this.grupos.push(data);
                });
           }
      });

}


actgrupos(){
  this.buttonDisabled = null;

  for (let j of this.grupos){
    for (let est of j.estudiantes){
      for (let estudiante of this.estudiantes){
          if(est==estudiante._id){
            estudiante.grupo=j.nombre;
          }
      }
    }
  // ... do other stuff here ...
}
console.log(this.estudiantes)

}
}
