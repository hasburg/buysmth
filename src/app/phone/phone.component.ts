import { Component, OnInit, Output } from '@angular/core';
import { LangService } from '../lang.service';
import { ru } from '../../environments/lang/ru.js';
import { ua } from '../../environments/lang/ua.js';
import { eng } from '../../environments/lang/eng.js';
import { esp } from '../../environments/lang/esp.js';
import { PositionService } from '../position.service';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  positionService;
  currentPosition;
  language;
  source;
  constructor(lang: LangService,
    position: PositionService) {
    this.language = lang;
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
    this.positionService = position;
    position.position.subscribe(res => {
      this.currentPosition = res;
    });
  }
  next(i) {
    const check = this.currentPosition + i;
    if (check >= 1 && check <= 4) {
      this.positionService.updatePosition(check);

    }

  }
  ngOnInit() {
  }

}
