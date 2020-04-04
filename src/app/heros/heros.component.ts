import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from './../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
