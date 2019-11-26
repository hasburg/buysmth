import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private positionSource = new BehaviorSubject<number>(1);
  public position = this.positionSource.asObservable();
  constructor() {
    this.updatePosition(1);
   }
  public updatePosition(int) {
    this.positionSource.next(int);
  }
}
