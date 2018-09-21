import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
@Component({
  selector: 'app-inicio-realizar',
  templateUrl: './inicio-realizar.component.html',
  styleUrls: ['./inicio-realizar.component.css']
})
export class InicioRealizarComponent implements OnInit {
  idUser:any;
assessment:any;
tipo:any;
assessmentaenviar:any;
preguntas=[];
puntaje=[];
comentarios=[];
comentariosnuevos=[];
constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getAssessmentDetail(this.route.snapshot.params['id']);

    this.idUser=localStorage.getItem('idUser');
    this.tipo=localStorage.getItem('tipo');



  }

  getAssessmentDetail(id) {
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/evaluacion_estudiantepeer/'+id, httpOptions).subscribe(data => {
      this.assessment = data;
      console.log(data);
      this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/cuestionario/'+this.assessment.idEvaluacion.idCuestionario, httpOptions).subscribe(data => {
        this.assessment.idEvaluacion.idCuestionario = data;
        console.log(data);
        for(let preg of this.assessment.idEvaluacion.idCuestionario.preguntas){
          let pregunta:any;
          let dat:any;
          this.http.get('http://www.aprendizajeactivo.espol.edu.ec:80/pregunta/'+preg, httpOptions).subscribe(data => {
            console.log(data);
            dat=data;
            if(dat.tipo=="Feedback"){
              this.comentariosnuevos.push(data);
              this.assessment.comentarios.push("");


            }
            else{
            this.preguntas.push(data);
            this.puntaje.push("0");
          }

                  });
        }
        this.assessment.puntaje=this.puntaje;
        //this.assessment.comentarios=this.comentarios;



      });

    });
  }

  select(){
    // let index: number;
/*     index = this.cursosSeleccionados.findIndex(num => num == id);
     if(index==-1){
     this.cursosSeleccionados.push(id);}
     else{this.cursosSeleccionados.splice(index,1)};*/
     console.log(this.assessment.puntaje);

   }
   select1(){
    //  let index: number;
 /*     index = this.cursosSeleccionados.findIndex(num => num == id);
      if(index==-1){
      this.cursosSeleccionados.push(id);}
      else{this.cursosSeleccionados.splice(index,1)};*/
      console.log(this.assessment.comentarios);

    }

    saveassessment(){
      this.assessment.idCurso=this.assessment.idCurso._id;
      this.assessment.idEstudiante=this.assessment.idEstudiante._id;
      this.assessment.idEstudianteEvaluar=this.assessment.idEstudianteEvaluar._id;
      this.assessment.idEvaluacion=this.assessment.idEvaluacion._id;
      this.assessment.idEvaluacionGrupo=this.assessment.idEvaluacionGrupo._id;
      this.assessment.finalizo=true;

      let suma=0;
      for(let i of this.assessment.puntaje){
        console.log(i);
        suma=suma+Number(i);
      }
      console.log(this.assessment.puntaje.length*5);
      console.log(suma);

      this.assessment.wfestudianteevaluar=suma/(this.assessment.puntaje.length*5);
      console.log(this.assessment);
      this.http.put('http://www.aprendizajeactivo.espol.edu.ec:80/evaluacion_estudiantepeer/peer/'+this.assessment._id, this.assessment, httpOptions)
        .subscribe(res => {
            //let id = res['_id'];
          }, (err) => {
            console.log(err);
          }
        );
        window.location.reload();

        this.router.navigate(['/inicio']);

    }
}
