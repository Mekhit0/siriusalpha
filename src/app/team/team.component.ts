import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TEAMComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  showText2() {
    this.isReadMore = !this.isReadMore
 }
 showText3() {
  this.isReadMore = !this.isReadMore
}

}
