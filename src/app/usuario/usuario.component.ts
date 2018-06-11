import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any;
  dtOptionsUser: any = {};


  isLoading = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('http://localhost:3000/user',httpOptions).subscribe(data => {
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
         "autoWidth": false
     }
   }




  }
