import { Component, OnInit } from '@angular/core';
import { eng } from '../../environments/lang/eng.js';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  toogle = true;
  source = eng.FAQ;

  constructor() { }

  ngOnInit() {
    this.source.forEach(element => {
      element.toogle = true;
    });

  }

}
