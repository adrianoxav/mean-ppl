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
  estudiantestable=[];
  tables:Boolean;
  cursoSeleccionado:any;
  numgrupos:any;
  clean:any;
  grupos=[];
  buttonactDisabled = true;
  buttonrecDisabled = true;

  buttonDisabled = true;
  isLoading = true;
  dtOptionsGrupo: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    this.tables=false;


    this.buttonDisabled = true;
    this.buttonactDisabled = true;

    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.idUser=localStorage.getItem('idUser');
let datos:any
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/user/'+this.idUser,httpOptions).subscribe(data => {
        datos=data;
        this.user=datos;
        console.log(this.user);

        for(let i of this.user.curso){
          this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/curso/'+i,httpOptions).subscribe(data => {
            this.cursos.push(data);
          });
        //  console.log(this.cursos);
        }
      });

      this.dtOptionsGrupo={
         language:{
             "sProcessing":     "Procesando...",
             "sLengthMenu":     "Mostrar _MENU_ registros",
             "sZeroRecords":    "No se encontraron resultados",
             "sEmptyTable":     "Ningún dato disponible en esta tabla",
             "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
             "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
             "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
             "sInfoPostFix":    "",
             "sSearch":         "Buscar:",
            "sSearchPlaceholder":  "Ingrese valor a buscar",
             "sUrl":            "",
             "sInfoThousands":  ",",
             "sLoadingRecords": "Cargando...",
             "oPaginate": {
               "sFirst":    "Primero",
               "sLast":     "Último",
               "sNext":     "Siguiente",
               "sPrevious": "Anterior"
             },
             "oAria": {
               "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
               "sSortDescending": ": Activar para ordenar la columna de manera descendente"
             }
           },
           "order": [[2,"desc"], [1,"desc"]],
           "autoWidth": false,
           "lengthMenu": [150, 300 ]

       }

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

    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:443/grupo/actualizargrupos/',grup,httpOptions).toPromise().then(data => {
      console.log(data);
  });




}
this.buttonDisabled = true;
this.buttonactDisabled = true;



}


  onChange(newValue) {
    this.buttonDisabled = true;
    this.grupos=[];
    this.cursoSeleccionado=newValue;
    this.estudiantes=[];
      console.log(newValue);
      let nom:any;
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/curso/'+newValue,httpOptions).subscribe(data => {
        nom=data;
        this.numgrupos=nom.numgrupos;
        console.log(nom.estudiantes)
        for (let i of nom.estudiantes){
          let noom:any;

        this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/estudiantes/'+i,httpOptions).subscribe(data => {
             console.log(data);
             noom=data;
             this.estudiantes.push(data);
           },
           error => console.log(error),
           () => this.isLoading = false
         );

       }

           for (let j of nom.grupos){
             this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/grupo/'+j,httpOptions).toPromise().then(data => {
                  //console.log(data);
                  this.grupos.push(data);
                });
           }
      });
      this.buttonrecDisabled = null;

}


actgrupos(){
this.buttonactDisabled = null;
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
this.tables=true;
this.estudiantestable=this.estudiantes;
console.log(this.estudiantes)

}

editargrupos(){
  this.tables=false;
  this.buttonDisabled = null;

}
}
