import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit {

  persona = {};

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  savePersona() {
    this.http.post('http://www.ppl.espol.edu.ec:443/persona', this.persona, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/persona-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
