import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    this.http.post('http://localhost:3000/persona', this.persona)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/persona-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
