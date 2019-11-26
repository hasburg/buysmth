import { Component, OnInit, Output } from '@angular/core';
import { LangService } from '../lang.service';
import { ru } from '../../environments/lang/ru.js';
import { ua } from '../../environments/lang/ua.js';
import { eng } from '../../environments/lang/eng.js';
import { esp } from '../../environments/lang/esp.js';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Output('position') position = 1;

  language;
  source;
  constructor(lang : LangService) {
    this.language=lang;
    lang.lang.subscribe(res => {
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
  next(i) {
    const check = this.position + i;
    if (check >= 1 && check <= 4) {
      this.position += i;
    }

  }
  ngOnInit() {
  }

}
