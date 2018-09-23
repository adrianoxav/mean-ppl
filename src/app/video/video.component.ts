import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  videos: any;
videoplayer:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:443/video', httpOptions).subscribe(data => {
      console.log(data);
      this.videos = data;
    });
  } 
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
}
