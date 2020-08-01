import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import * as XLSX from 'ts-xlsx';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
  curso = {_id:"",idMateria: String,numgrupos: Number,nombre:String,cod_materia: String,profesores:[ ],estudiantes:[ ],grupos:[ ]};
  users : any;
  id:any;
  lista: any;
  arrayBuffer:any;
  materia:any;
  file:File;
  materias:{};
  profesores=[ ];
  estudiantes=[ ];
  estudiantestab=[ ];
  cursoaActualizar={};
  cursosSeleccionados=[];
estudianteEliminar:any;
habilitado:Boolean;
dtOptionsEstu: any = {};
tables:Boolean;
selected: String[]=[];
cursos = {};
idUser:String;
admin:any;
esadmin:Boolean;
isLoading = true;
esProfesor = false;

cursoactual
  incomingfile(event)
   {
   this.file= event.target.files[0];
   }
   onChange(newValue) {
     this.curso.idMateria=newValue;
     console.log(this.curso);
     let httpOptions = {
       headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
     };
 this.materia=newValue;
 let datos:any;

 this.http.get('http://www.ppl.espol.edu.ec:443/materia/'+this.materia,httpOptions).subscribe(data => {
   console.log(data);
datos=data;
   this.curso.nombre = datos.nombre;
   this.curso.cod_materia = datos.cod_materia;

 });
       // ... do other stuff here ...
   }

   onchange1(newValue){
     console.log(newValue);

   }

   onChange2(newValue) {
     //this.cursosSeleccionados.push(newValue);
       console.log(newValue);
       //this.signupData.curso.push(newValue);
       console.log(this.cursosSeleccionados);

       // ... do other stuff here ...
   }

   select(id: any){
      let index: number;
      index = this.cursosSeleccionados.findIndex(num => num == id);
      if(index==-1){
      this.cursosSeleccionados.push(id);}
      else{this.cursosSeleccionados.splice(index,1)};
      console.log(this.cursosSeleccionados);

    }


      constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

      ngOnInit() {
        this.idUser=localStorage.getItem('idUser');

        this.admin = localStorage.getItem('email');

        if(this.admin=="adminfisica"){
          this.esadmin=true;
        }
        this.http.get('http://www.ppl.espol.edu.ec:443/cursos').subscribe(data => {
          console.log(data);
          this.cursos = data;
        });
        this.tables=false;


        this.getCurso(this.route.snapshot.params['id']);
        this.id=this.route.snapshot.params['id'];
        let cur:any;
        this.http.get('http://www.ppl.espol.edu.ec:443/cursos/'+this.id).subscribe(data => {
          cur=data;
          console.log(this.curso);

          for (let j of cur.profesores){



                 if(j==this.idUser){
                   this.esProfesor=true;
                 }

               }


             console.log(this.esProfesor);



      });




        console.log(this.id);
        console.log(this.curso);
        let httpOptions = {
          headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
    /*    this.http.get('http://www.ppl.espol.edu.ec:443/materia',httpOptions).subscribe(data => {
          console.log(data);
          this.materias = data;
        });*/
        console.log(this.curso);
        this.dtOptionsEstu={
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
             "lengthMenu": [150, 200]

         }
      }
      Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            console.log(workbook);
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            this.lista= XLSX.utils.sheet_to_json(worksheet,{raw:true});
            console.log(this.lista);

         }
        fileReader.readAsArrayBuffer(this.file);
 }

      getCurso(id) {
        this.estudiantes=[];
        this.profesores=[];
        this.curso = {_id:"",idMateria: String,numgrupos: Number,nombre:String,cod_materia:String,profesores:[ ],estudiantes:[ ],grupos:[ ]};
        let curs:any;
        this.http.get('http://www.ppl.espol.edu.ec:443/curso/'+id,httpOptions).subscribe(data => {
          curs=data;
          this.curso = curs;
          console.log(this.curso);
          for (let i of curs.estudiantes){
            let noom:any;

          this.http.get('http://www.ppl.espol.edu.ec:443/estudiantes/'+i,httpOptions).subscribe(data => {
               console.log(data);
               noom=data;
               this.estudiantes.push(data);
             },
             error => console.log(error),
             () => this.isLoading = false
           );

         }
          for (let j of curs.profesores){

            let ver:any;
          this.http.get('http://www.ppl.espol.edu.ec:443/user/'+j,httpOptions).subscribe(data => {
               console.log(data);
               console.log(this.idUser);

               ver=data;
               if(ver.email=="adminfisica"){}
               else{
                 if(ver._id==this.idUser){
                   this.esProfesor=true;
                 }

               this.profesores.push(data);}

             });
             console.log(this.esProfesor);

           }

      });
    }


      updateCurso(id) {
    //    this.curso.updated_date = Date.now();
        this.http.put('http://www.ppl.espol.edu.ec:443/curso/'+id, this.curso,httpOptions)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/curso-details', id]);
            }, (err) => {
              console.log(err);
            }
          );
      }

      saveAssignation(asig) {
        let httpOptions = {
          headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.post('http://www.ppl.espol.edu.ec:443/asignacion', asig,httpOptions)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/assignation-details', id]);
            }, (err) => {
              console.log(err);
            }
          );
      }


createUsers(){
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
      let c=this.getCurso(this.route.snapshot.params['id']);

let assign:any;
let r:any;
let nuevalista=[ ];
let l=[];
nuevalista.push(this.cursosSeleccionados, this.lista);
console.log(nuevalista);
      this.http.post('http://www.ppl.espol.edu.ec:443/api/register/', nuevalista, httpOptions)
        .subscribe(res => {
            console.log(res);

});

}
acteditest(){
  this.habilitado=true;
  this.estudiantestab=this.estudiantes;

}
eliminarEstudiante(id){

  console.log(id);
  console.log(this.curso);
var estu:any;
/*  this.http.get('http://www.ppl.espol.edu.ec:443/estudiantes/'+id,httpOptions).subscribe(data => {
       console.log(data);
       estu=data;
       var j= estu.curso.indexOf( this.curso._id );
           estu.curso.splice( j, 1 );
           this.http.put('http://www.ppl.espol.edu.ec:443/estudiantes/'+id, estu,httpOptions)
             .subscribe(res => {
                 console.log(res);
               }, (err) => {
                 console.log(err);
               }
);

});*/
  var i = this.curso.estudiantes.indexOf( id );
      this.curso.estudiantes.splice( i, 1 );


  this.http.put('http://www.ppl.espol.edu.ec:443/curso/'+this.curso._id, this.curso,httpOptions)
    .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      }
    );
    for(let grup of this.curso.grupos){
      let ver:any;

      this.http.get('http://www.ppl.espol.edu.ec:443/grupo/'+grup,httpOptions).toPromise().then(data => {
           console.log(data);
           ver=data;
           var i = ver.estudiantes.indexOf( id );
           console.log(i)
             if(i!=-1){
               ver.estudiantes.splice( i, 1 );
               console.log(ver);

               this.http.put('http://www.ppl.espol.edu.ec:443/grupo/'+grup, ver,httpOptions)
                 .subscribe(res => {
                     console.log(res);
                   }, (err) => {
                     console.log(err);
                   }
);
             }
         });
    }


console.log(this.curso);
this.profesores=[];
this.estudiantes=[];

  this.ngOnInit();
  window.location.reload();


}
cargarEstudiantes(curso){
  this.tables=true;

  for (let i of curso.estudiantes){
    let noom:any;

  this.http.get('http://www.ppl.espol.edu.ec:443/estudiantes/'+i,httpOptions).subscribe(data => {
       console.log(data);
       noom=data;
       this.estudiantes.push(data);
     },
     error => console.log(error),
     () => this.isLoading = false
   );

 }
}

aniadirsecomoProfesor(){

  let cursoactual:any;
  this.http.get('http://www.ppl.espol.edu.ec:443/cursos/'+this.id).subscribe(data => {
    cursoactual=data;
    console.log(cursoactual);



cursoactual.profesores.push(this.idUser);

this.http.put('http://www.ppl.espol.edu.ec:443/cursos/'+this.id,cursoactual).subscribe(data => {
  console.log(data);
});

let profesoractual:any;
this.http.get('http://www.ppl.espol.edu.ec:443/user/'+this.idUser,httpOptions).subscribe(data => {
  profesoractual=data;
  console.log(profesoractual);
  profesoractual.curso.push(this.id);

this.http.put('http://www.ppl.espol.edu.ec:443/user/'+this.idUser,profesoractual,httpOptions).subscribe(data => {
  console.log(data);
  window.location.reload();


});
}
);
});

}


}
