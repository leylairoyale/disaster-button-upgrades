import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theyclicky: boolean = false;
  theynoclicky: boolean = true;
  anotherclicky: boolean = false;
  clickagain: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onClick() {
    // location.href = 'http://deadinchicago.com/random'
    console.log("they clicky")
    this.theyclicky = true;
    this.theynoclicky = false;
    this.anotherclicky = true;

  }

  anotherClick() {
    console.log('they clicky again!')
    this.theyclicky = false;
    // this.theyclicky = true;
    this.clickagain = true;
    this.theynoclicky = true;
    this.anotherclicky = false
  }

}