import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SiriusALpha';

  constructor(private router: Router){

  }
  button1(){
    this.router.navigate(['main'])
  }
  button2(){
    this.router.navigate(['main/aboutus'])
  }
  button3(){
    this.router.navigate(['main/aboutus/contact'])
  }
  button4(){
    this.router.navigate(['main/aboutus/contact/team'])
  }
}
