import { Component, OnInit, ViewChild } from '@angular/core';
import { LangService } from '../lang.service';
import { ru } from '../../environments/lang/ru.js';
import { ua } from '../../environments/lang/ua.js';
import { eng } from '../../environments/lang/eng.js';
import { esp } from '../../environments/lang/esp.js';
@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {
  @ViewChild('position', { static: true }) phone;
  lang = new LangService();
  source;
  pos;
  constructor() {
    this.lang.lang.subscribe(res => {
      switch (res) {
        case 'ru':
          this.source = ru;
          break;
        case 'ua':
          this.source = ua;
          break;
        case 'eng':
          this.source = eng;
          break;
        case 'esp':
          this.source = esp;
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
    this.pos = this.phone.position;
  }

}
