import { Component, OnInit } from '@angular/core';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((ones) => this.heroes = ones.filter((one, idx) => { return idx < 4 }));
  }

}
