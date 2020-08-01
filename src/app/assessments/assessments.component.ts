import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  assessments: any;
  assess: any;
  dtOptionsAssess: any = {};
  isLoading = true;
  tipo:any;
  idUser:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.idUser=localStorage.getItem('idUser');
    this.tipo=localStorage.getItem('tipo');
    console.log(this.idUser);

    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://www.ppl.espol.edu.ec:443/evaluacion_estudiante/finalizados/'+this.idUser).subscribe(data => {
       this.assessments=data;
       for (let e of this.assessments){
         e.nombre=e.idEvaluacion.nombre;
         e.materia=e.idCurso.nombre;
         e.capitulo=e.idEvaluacion.capitulo;



       }
      console.log(data);

    },
    error => console.log(error),
    () => this.isLoading = false
  );


    this.dtOptionsAssess={
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

}
