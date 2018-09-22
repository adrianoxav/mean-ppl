import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  persona: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPersona(this.route.snapshot.params['id']);
  }

  getPersona(id) {
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/persona/'+id, httpOptions).subscribe(data => {
      this.persona = data;
    });
  }

  updatePersona(id) {
//    this.persona.updated_date = Date.now();
    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:443/persona/'+id, this.persona, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/persona-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
