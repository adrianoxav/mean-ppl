import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assignation',
  templateUrl: './assignation.component.html',
  styleUrls: ['./assignation.component.css']
})
export class AssignationComponent implements OnInit {
  dtOptionsAssig: any = {};
  isLoading = true;
  assignations: any;
  cursos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/asignacion',httpOptions).subscribe(data => {
      console.log(data);
      this.assignations = data;
      for (let assig of this.assignations){
        this.http.get('http://localhost:3000/curso/'+assig.idCurso,httpOptions).subscribe(data => {
      //    console.log(data);
          assig.idCurso = data;
        },error => console.log(error),
        () => this.isLoading = false
      );
        this.http.get('http://localhost:3000/user/'+assig.idUser,httpOptions).subscribe(data => {
        //  console.log(data);
          assig.idUser = data;
        },error => console.log(error),
        () => this.isLoading = false
      );

      }

    },
   error => console.log(error),
   () => this.isLoading = false
 );
    this.dtOptionsAssig={

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
  						"sSearchPlaceholder":  "Ingrese Paciente/Tipo de Muestra/Fecha de Ingreso/Estado",
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
         "order": [[0,"desc"],[2,"desc"], [1,"desc"]],
         "autoWidth": false,
         "lengthMenu": [50, 100, 150, 200]
     }



  }

}
