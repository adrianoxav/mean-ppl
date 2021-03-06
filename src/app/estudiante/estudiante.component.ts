import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  tipo:any;

  idUser:any;
  curso:any;

    estudiantes: any;
    dtOptionsEst: any = {};


    isLoading = true;
    admin:any;
    esadmin:Boolean;
    //*ngIf=(esadmin)
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.idUser=localStorage.getItem('idUser');
    this.tipo=localStorage.getItem('tipo');
    this.curso=localStorage.getItem('curso');
    this.admin = localStorage.getItem('email');
    if(this.admin=="adminfisica"){
      this.esadmin=true;
    }

    this.http.get('http://www.ppl.espol.edu.ec:443/estudiante',httpOptions).subscribe(data => {
      console.log(data);
      this.estudiantes = data },
      error => console.log(error),
      () => this.isLoading = false
    );

    this.dtOptionsEst={
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
