import { Component, OnInit } from '@angular/core';
import { eng } from '../../environments/lang/eng.js';
import { ru } from '../../environments/lang/ru.js';
import { ua } from '../../environments/lang/ua.js';
import { esp } from '../../environments/lang/esp.js';
import { LangService } from '../lang.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  source = eng;
  constructor(lang: LangService) {
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

  ngOnInit() {
  }

}
