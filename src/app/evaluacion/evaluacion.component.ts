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
  dtOptionsEval: any = {};
  isLoading = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.http.get('http://localhost:3000/user/'+localStorage.getItem("idUser"), httpOptions).subscribe(data => {
      this.usuario = data;
    });
    this.http.get('http://localhost:3000/evaluacion/getporprofesor/',httpOptions).subscribe(data => {
      this.allevaluaciones = data;
      for(let curso of this.usuario.curso){

        for(let evalu of this.allevaluaciones){
          if(curso==evalu.idCurso._id){
          this.evaluaciones.push(evalu)
          console.log(curso);
          console.log(evalu.idCurso);
        }

        }

      }
      console.log(this.evaluaciones);

    });

    this.dtOptionsEval={
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
}
