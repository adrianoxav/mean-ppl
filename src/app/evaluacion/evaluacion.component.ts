import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  allevaluaciones: any;
  usuario:any;
  evaluaciones= [];
  dtOptionsEva: any = {};
  isLoading = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dtOptionsEva={
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


    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/user/'+localStorage.getItem("idUser"), httpOptions).subscribe(data => {
      this.usuario = data;
    });
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/evaluacion/getporprofesor/',httpOptions).subscribe(data => {
      this.allevaluaciones = data;
      console.log(data);
      for(let curso of this.usuario.curso){

        for(let evalu of this.allevaluaciones){
          if(curso==evalu.idCurso._id){
            evalu.idCurso=evalu.idCurso.nombre;
          this.evaluaciones.push(evalu)
          console.log(curso);
          console.log(evalu.idCurso);
        }

        }

      }
      for (let e of this.evaluaciones){

      }
      console.log(this.evaluaciones);

    },
    error => console.log(error),
    () => this.isLoading = false
  );



  }
}
