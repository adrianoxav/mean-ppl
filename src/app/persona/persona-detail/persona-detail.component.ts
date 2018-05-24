import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonaDetailComponent implements OnInit {

  persona = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPersonaDetail(this.route.snapshot.params['id']);
  }

  getPersonaDetail(id) {
    this.http.get('http://localhost:3000/persona/'+id).subscribe(data => {
      this.persona = data;
    });
  }

  deletePersona(id) {
    this.http.delete('http://localhost:3000/persona/'+id)
      .subscribe(res => {
          this.router.navigate(['/personas']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
