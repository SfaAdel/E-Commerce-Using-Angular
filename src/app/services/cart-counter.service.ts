import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  private counter = new BehaviorSubject<number>(0)
  constructor() { }

  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newValue: number){
    this.counter.next(newValue);
  }
}
