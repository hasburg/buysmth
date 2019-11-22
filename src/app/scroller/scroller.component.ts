import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  imageCount=1;
  constructor() { }

  ngOnInit() {
  }

}
