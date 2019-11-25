import { Component } from '@angular/core';
import { LangService } from './lang.service';
import { ru } from '../environments/lang/ru.js';
import { ua } from '../environments/lang/ua.js';
import { eng } from '../environments/lang/eng.js';
import { esp } from '../environments/lang/esp.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buysmthlandingpage';
  lang = new LangService();
  source;
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
  scrollToComponent(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
