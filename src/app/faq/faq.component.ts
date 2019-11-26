import { Component } from '@angular/core';
import { eng } from '../../environments/lang/eng.js';
import { ru } from '../../environments/lang/ru.js';
import { ua } from '../../environments/lang/ua.js';
import { esp } from '../../environments/lang/esp.js';
import { LangService } from '../lang.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent  {
  source;
  constructor(lang: LangService) {
    lang.lang.subscribe(res => {
      switch (res) {
        case 'ru':
          this.source = ru.FAQ;
          break;
        case 'ua':
          this.source = ua.FAQ;
          break;
        case 'eng':
          this.source = eng.FAQ;
          break;
        case 'esp':
          this.source = esp.FAQ;
          break;
        default:
          break;
      }
      this.source.forEach(element => {
        element.toogle = true;
      });
    });
  }



}
