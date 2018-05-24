import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.get('http://localhost:3000/persona/'+id).subscribe(data => {
      this.persona = data;
    });
  }

  updatePersona(id) {
//    this.persona.updated_date = Date.now();
    this.http.put('http://localhost:3000/persona/'+id, this.persona)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/persona-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
