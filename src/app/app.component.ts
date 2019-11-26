import { Component } from '@angular/core';
import { LangService } from './lang.service';
import { ru } from '../environments/lang/ru.js';
import { ua } from '../environments/lang/ua.js';
import { eng } from '../environments/lang/eng.js';
import { esp } from '../environments/lang/esp.js';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.offset = window.pageYOffset;
  }
  title = 'buysmthlandingpage';
  currentLang;
  language;
  source;
  offset;
  constructor(lang: LangService) {
    this.language = lang;
    lang.lang.subscribe(res => {
      this.currentLang = res;
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
  changeLang(lang) {
    this.language.updateLanguage(lang);
  }

}
