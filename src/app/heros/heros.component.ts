import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(ones => this.heroes = ones);
  }

  onSelect(hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

}
