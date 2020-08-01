import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ExcelService} from './../../excel.service';

let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-evaluacion-detail',
  templateUrl: './evaluacion-detail.component.html',
  styleUrls: ['./evaluacion-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EvaluacionDetailComponent implements OnInit {
  isLoading = true;
  dtOptionsEval: any = {};

  cuestionario : any;
  pregunta:any;
  evaluacionestudiantes:any;
  preguntas: any;
        evaluacion: any;
        evals=[];
        //eval={_id:"",nombres:"",evaluo:0,hanrealizado:0,idGrupo:0,wfgrupo:0,wfestudiante:0}

        constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,private excelService:ExcelService) { }

        ngOnInit() {
          this.getEvaluacionDetail(this.route.snapshot.params['id']);
          //console.log('id');

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
                   "lengthMenu": [150, 300 ]

               }

        }

        getEvaluacionDetail(id) {
          this.http.get('http://www.ppl.espol.edu.ec:443/evaluacion/'+id,httpOptions).subscribe(data => {
            this.evaluacion = data;
console.log(this.evaluacion);
                      this.http.get('http://www.ppl.espol.edu.ec:443/cuestionario/'+this.evaluacion.idCuestionario,httpOptions).subscribe(data => {
                        this.cuestionario = data;
                        console.log(data);
                        console.log(this.cuestionario);

                      });

                      this.http.get('http://www.ppl.espol.edu.ec:443/evaluacion_estudiante/poreval/'+this.evaluacion._id,httpOptions).subscribe(data => {
                        this.evaluacionestudiantes = data;
                        console.log(this.evaluacionestudiantes);
                        if(this.evaluacion.tipo=="Peer" || this.evaluacion.tipo=="Team"){
                        for(let e of this.evaluacionestudiantes){
                          let ape=e.idEstudiante.apellidos;
                          console.log(ape)
                          let evalua:any;
                          if (ape==undefined) {                          evalua={_id:e._id,identificacion:e.idEstudiante.identificacion,hanrealizado:e.hanrealizado,email:e.idEstudiante.email,nombres:e.idEstudiante.nombres,finalizo:e.finalizo,evaluaste:e.evaluaste,numGrupo:e.numGrupo,haevaluado:e.haevaluado,idGrupo:e.idGrupo.nombre,wfgrupo:e.idEvaluacionGrupo.wfgrupo,wfestudiante:e.wfestudiante}
}else {
                          evalua={_id:e._id,identificacion:e.idEstudiante.identificacion,hanrealizado:e.hanrealizado,email:e.idEstudiante.email,nombres:e.idEstudiante.apellidos + " " +e.idEstudiante.nombres,finalizo:e.finalizo,evaluaste:e.evaluaste,numGrupo:e.numGrupo,haevaluado:e.haevaluado,idGrupo:e.idGrupo.nombre,wfgrupo:e.idEvaluacionGrupo.wfgrupo,wfestudiante:e.wfestudiante}
      }                    this.evals.push(evalua);

                        }
                        console.log(this.evals);

                        }
                        else if(this.evaluacion.tipo=="Self"){
                        for(let e of this.evaluacionestudiantes){
                          let evalua={_id:e._id,identificacion:e.idEstudiante.identificacion,hanrealizado:e.hanrealizado,email:e.idEstudiante.email,nombres:e.idEstudiante.apellidos + " " +e.idEstudiante.nombres,finalizo:e.finalizo,evaluaste:e.evaluaste,numGrupo:e.numGrupo,haevaluado:e.haevaluado,idGrupo:e.idGrupo.nombre,wfestudiante:e.wfestudiante}
                          this.evals.push(evalua);

                        }
                        console.log(this.evals);

                        }
                      },
                      error => console.log(error),
                      () => this.isLoading = false
                    );
          });

        }

        deleteEvaluacion(id) {
          this.http.delete('http://www.ppl.espol.edu.ec:443/evaluacion/'+id,httpOptions)
            .subscribe(res => {
                this.router.navigate(['/evaluaciones']);
              }, (err) => {
                console.log(err);
              }
            );
        }

        getPreguntas(preguntas){
          var i:any;
          let preg=[];
          for (i of preguntas){
            console.log(i);
            let dat:any;
            this.http.get('http://www.ppl.espol.edu.ec:443/pregunta/'+i,httpOptions).subscribe(data => {
              i = data;
              dat=data;
              console.log(data);
              preg.push(dat.pregunta);
            });

          }
    console.log(preg);
    this.cuestionario.preguntas=preg;
        }

        ConvertToCSV(objArray) {
                    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
                      var str = '';
                    var row = "";

                    for (var index in objArray[0]) {
                        //Now convert each value to string and comma-separated
                        row += index + ',';
                    }
                    row = row.slice(0, -1);
                    //append Label row with line break
                    str += row + '\r\n';

                    for (var i = 0; i < array.length; i++) {
                        var line = '';
                        for (var index in array[i]) {
                            if (line != '') line += ','

                            line += array[i][index];
                        }
                        str += line + '\r\n';
                    }
                    return str;
                }


        exportAsXLSX():void {
          let toexcel=[];
          for (let evalu of this.evals){
            let evalua={
              identificacion:evalu.identificacion,
              email:evalu.email,
              nombres:evalu.nombres,
              finalizo:evalu.finalizo,
              evaluaste:evalu.evaluaste,
              numGrupo:evalu.numGrupo,
              haevaluado:evalu.haevaluado,
              idGrupo:evalu.idGrupo,
              wfestudiante:evalu.wfestudiante}


            toexcel.push(evalua);

          }


   this.excelService.exportAsExcelFile(toexcel, this.evaluacion.nombre + "-" + this.evaluacion.capitulo);
}

recargar(){
  this.evals=[];
  this.ngOnInit();


}

finalizarEvaluacion(id) {
  this.http.put('http://www.ppl.espol.edu.ec:443/evaluacion/terminarevaluacion/'+id,id,httpOptions)
    .subscribe(res => {
        this.recargar();
      }, (err) => {
        console.log(err);
      }
    );
}


}
