import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any;
  dtOptionsUser: any = {};

  admin:any;
  esadmin:Boolean;
  isLoading = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.admin = localStorage.getItem('email');
    if(this.admin=="adminfisica"){
      this.esadmin=true;
    }
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/user',httpOptions).subscribe(data => {
      console.log(data);
      this.usuarios = data },
      error => console.log(error),
      () => this.isLoading = false
    );

    this.dtOptionsUser={
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
         "lengthMenu": [50, 100, 150, 200]

     }
   }

limpiarProfesores(){
  this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/user',httpOptions).subscribe(data => {
    console.log(data);
    this.usuarios = data;

    for(let user of this.usuarios){
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/user/'+user._id,httpOptions).subscribe(data => {
        let profesoractual:any;
        profesoractual=data;
        console.log(profesoractual);
        profesoractual.curso=[];

      this.http.put('http://www.aprendizajeactivo.espol.edu.ec:443/user/'+profesoractual._id,profesoractual,httpOptions).subscribe(data => {
        console.log(data);

      });
      }
      );
    }
  },
)
}


limpiarSemestre(){
//limpiar cursos
let cursos:any;
this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/curso',httpOptions).subscribe(data => {
  console.log(data);
  cursos = data;

  for(let curso of cursos){
    this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/curso/'+curso._id,httpOptions).subscribe(data => {
      console.log(data)
    });
  }
},
)
//limpiar grupos
let grupos:any;
this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/grupo',httpOptions).subscribe(data => {
  console.log(data);
  grupos = data;

  for(let grupo of grupos){
    this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/grupo/'+grupo._id,httpOptions).subscribe(data => {
      console.log(data)
    });
  }
},
)
//limpiar evaluaciones
let evaluaciones:any;
this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion',httpOptions).subscribe(data => {
  console.log(data);
  evaluaciones = data;

  for(let evaluacione of evaluaciones){
    this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion/'+evaluacione._id,httpOptions).subscribe(data => {
      console.log(data)
    });
  }
},
)

//limpiar estudiantes
let estudiantes:any;
this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/estudiante',httpOptions).subscribe(data => {
  console.log(data);
  estudiantes = data;

  for(let estudiante of estudiantes){
    this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/estudiante/'+estudiante._id,httpOptions).subscribe(data => {
      console.log(data)
    });
  }
},
)

}



  }
