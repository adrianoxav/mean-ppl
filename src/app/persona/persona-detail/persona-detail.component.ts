import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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
    this.http.get('http://www.ppl.espol.edu.ec:443/persona/'+id, httpOptions).subscribe(data => {
      this.persona = data;
    });
  }

  deletePersona(id) {
    this.http.delete('http://www.ppl.espol.edu.ec:443/persona/'+id, httpOptions)
      .subscribe(res => {
          this.router.navigate(['/personas']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
