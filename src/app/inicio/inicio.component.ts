import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as XLSX from 'ts-xlsx';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 users : any;

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
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  console.log(httpOptions);
  this.http.get('http://localhost:3000/user', httpOptions).subscribe(data => {
    this.users = data;
    console.log(this.users);
  }, err => {
    if(err.status === 401) {
      this.router.navigate(['login']);
    }
  });
}

}
