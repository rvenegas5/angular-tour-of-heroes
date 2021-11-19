import { Injectable } from '@angular/core';
import { Hero } from '../heroes/interfaces/hero.interface';
import { HEROES } from '../mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeores(): Observable<Hero[]> { // Use Observable for async fetch data
    const heroes = of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
}
