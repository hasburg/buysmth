import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LangService {
  private getValueFromSession = JSON.parse(sessionStorage.getItem('lang')) ? JSON.parse(sessionStorage.getItem('lang')) : 'eng';
  private langSource = new BehaviorSubject<any>(this.getValueFromSession);
  public lang = this.langSource.asObservable();
  constructor() {
    this.updateCurrentUser(this.getValueFromSession);
   }
  private updateCurrentUser(lang) {
    this.langSource.next(lang);
  }

}
