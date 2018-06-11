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
  curso = {};
  users : any;
  id:any;
  lista: any;
  arrayBuffer:any;
  file:File;
  incomingfile(event)
   {
   this.file= event.target.files[0];
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


      constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

      ngOnInit() {
        this.getCurso(this.route.snapshot.params['id']);
        this.id=this.route.snapshot.params['id'];
        console.log(this.id);
      }

      getCurso(id) {
        this.http.get('http://localhost:3000/curso/'+id,httpOptions).subscribe(data => {
          this.curso = data;
        });
      }

      updateCurso(id) {
    //    this.curso.updated_date = Date.now();
        this.http.put('http://localhost:3000/curso/'+id, this.curso,httpOptions)
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
        this.http.post('http://localhost:3000/asignacion', asig,httpOptions)
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
    for(let l of this.lista){
let assign:any;

      this.http.post('http://localhost:3000/api/register', l, httpOptions)
        .subscribe(res => {
            console.log(res.msg);
            let idUser = res['_id'];
let assignation:any;
            if(res.msg=="email already exists."){
              console.log("wiiiiii");
              this.http.get('http://localhost:3000/user/email/'+l.email, httpOptions).subscribe(data => {
                console.log(data);

                 assignation = {
                     'idCurso': this.id,
                     'grupo': l.grupo,
                   'idUser': data._id };
                   console.log(assignation);
                   this.http.post('http://localhost:3000/asignacion', assignation,httpOptions)
                     .subscribe(res => {
                         console.log(res);
                       }, (err) => {
                         console.log(err);
                       }
                     );

              }

            );

            }
            else{
             assignation = {
                 'idCurso': this.id,
                 'grupo': l.grupo,
               'idUser': idUser };
               console.log(assignation);
               this.http.post('http://localhost:3000/asignacion', assignation,httpOptions)
                 .subscribe(res => {
                     console.log(res);
                   }, (err) => {
                     console.log(err);
                   }
                 );
                }



    }
);

}
}
}
