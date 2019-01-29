import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
@ViewChild('videoPlayer')

export class VideoComponent implements OnInit {
  idUser:any;
  materias=[];
  cursos=[];
tipo:any;
  user={curso:[]};

  videos=[];
videoplayer:any;
dtOptionsVideo: any = {};


isLoading = true;
  constructor(private http: HttpClient,private _sanitizer: DomSanitizer) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.idUser=localStorage.getItem('idUser');
    this.tipo=localStorage.getItem('tipo');
    console.log(this.tipo);
let datos:any
if(this.tipo=="Profesor"){
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/user/'+this.idUser,httpOptions).subscribe(data => {
        datos=data;
        this.user=datos;
        console.log(this.user);

        for(let i of this.user.curso){
          let c:any;
          this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/curso/'+i,httpOptions).toPromise().then(data => {
            c=data;
            this.cursos.push(data);
            console.log(this.cursos);
            if (this.materias.indexOf(c.idMateria) == -1) {
              this.materias.push(c.idMateria);
              this.getvideos(c.idMateria);

            }

            console.log(this.materias);
          });
        }

      },
      error => console.log(error),
      () => this.isLoading = false
    );

      }

      else if(this.tipo=="Estudiante"){
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/estudiante/'+this.idUser,httpOptions).subscribe(data => {
        datos=data;
        this.user=datos;
        console.log(this.user);

        for(let i of this.user.curso){
          let c:any;
          this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/curso/'+i,httpOptions).toPromise().then(data => {
            c=data;
            this.cursos.push(data);
            console.log(this.cursos);
            if (this.materias.indexOf(c.idMateria) == -1) {
              this.materias.push(c.idMateria);
              this.getvideos(c.idMateria);

            }

            console.log(this.materias);
          });
        }

      },
      error => console.log(error),
      () => this.isLoading = false
    );

}
/*
else if(this.tipo==null){
  console.log("videos");
  let d:any;
  this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/videos/').toPromise().then(data => {
    console.log(data);
    d=data;
    for(let i=0;i<d.length;i++)
    {
      //d[i].materia=mate.nombre;
      d[i].url=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+d[i].url);
      console.log(d);

      this.videos.push(d[i]);

    }
    console.log(this.videos);


  });
}*/




  }

getvideos(materia){
    console.log(materia);

    let d:any;
    let mate:any;
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/materia/'+materia,httpOptions).subscribe(data => {
      mate = data;
      console.log(mate);

  this.http.get('http://www.aprendizajeactivo.espol.edu.ec:443/video/getpormateria/'+mate._id, httpOptions).toPromise().then(data => {
    console.log(data);
    d=data;
    for(let i=0;i<d.length;i++)
    {
      d[i].materia=mate.nombre;
      d[i].url=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+d[i].url);
      console.log(d);

      this.videos.push(d[i]);

    }
    console.log(this.videos);


  });
  });
  console.log(this.videos);

}


  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }


  eliminarVideo(id) {
    this.http.delete('http://www.aprendizajeactivo.espol.edu.ec:443/video/'+id,httpOptions)
      .subscribe(res => {

//  window.location.reload();

        }, (err) => {
          console.log(err);
        }
      );
      window.location.reload();

  }

  sorted(videos){
    let vid=[];
    for (let i = 0; i < 40; i++)
{
  for(let j = 0; j < videos.length; j++)
  {
    if(videos[j].modulo == i)
    {
      vid.push(videos[j]);
    }
  }
}
return vid;
   }

}
