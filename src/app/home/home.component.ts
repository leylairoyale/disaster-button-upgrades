import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theyclicky: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onClick() {
    // location.href = 'http://deadinchicago.com/random'
    console.log("they clicky")
    this.theyclicky = true;

  }
}