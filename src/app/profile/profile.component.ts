import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  idUser: any;
  cursos=[];

  tipo:any;
    usuario = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.idUser= localStorage.getItem("idUser");
      this.tipo= localStorage.getItem("tipo");

      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      if(this.tipo=="Estudiante"){
      this.http.get('http://www.ppl.espol.edu.ec:443/estudiante/'+this.idUser, httpOptions).subscribe(data => {
        this.usuario = data;
        let est:any;
        est=data;
        for(let curso of est.curso){
          this.http.get('http://www.ppl.espol.edu.ec:443/curso/'+curso,httpOptions).subscribe(data => {
            console.log(data);
            this.cursos.push(data);
          });
        }
      });
    }
    else{
      this.http.get('http://www.ppl.espol.edu.ec:443/user/'+this.idUser, httpOptions).subscribe(data => {
        this.usuario = data;
        let est:any;
        est=data;
        for(let curso of est.curso){
          this.http.get('http://www.ppl.espol.edu.ec:443/curso/'+curso,httpOptions).subscribe(data => {
            console.log(data);
            this.cursos.push(data);
      });
    }


      });



}
}
}
